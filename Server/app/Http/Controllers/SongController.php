<?php

namespace App\Http\Controllers;

use App\Models\Singer;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class SongController extends Controller
{
    public function index()
    {
        $songs = Song::paginate(5);
        return view('pages.song-pages.songs', [
            'songs' => $songs
        ]);
    }

    public function destroy($song_id)
    {
        $song = Song::find($song_id);
        if ($song):
            $song->delete();
            return redirect()->route('songs');
        endif;
        return redirect()->route('songs')->withErrors(['Song not found']);
    }

    public function edit(Request $request)
    {
        $song = Song::find($request->song_id);
        return view('pages.song-pages.edit-song', [
            'song' => $song
        ]);
    }

    public function update(Request $request)
    {

        $validateData = $request->validate([
            'song_name' => ['required', 'string', 'max:255'],
            'lyric' => ['nullable', 'string'],
            'cover_photo' => ['nullable', 'image', 'max:2048']
        ]);

        if ($validateData) {
            $song = Song::find($request->song_id);
            $song->fill([
                'song_name' => $validateData['song_name'],
                'lyric' => $validateData['lyric']
            ]);

            if ($request->hasFile('cover_photo')) {
                $nameFile = UserController::handleImage($request->cover_photo);
                $song->cover_photo = $nameFile;
            }

            $song->save();
            return redirect()->route('songs');
        }

        return redirect()->route('songs.edit', ['song_id' => $request->song_id])->withErrors($validateData);
    }

    public function create()
    {
        return view('pages.song-pages.create-song');
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'song_name' => ['required', 'string', 'max:255'],
            'singer_name' => ['required', 'string', 'max:255', 'exists:singers,singer_name'],
            'cover_photo' => ['required', 'image', 'max:2048'],
            'lyric' => ['nullable', 'string']
        ]);

        if ($validateData) {
            $song = new Song();
            if ($request->hasFile('cover_photo')) {
                $nameFile = UserController::handleImage($request->cover_photo);
                $song->cover_photo = $nameFile;
            }

            $song->fill([
                'song_name' => $validateData['song_name'],
                'lyric' => $validateData['lyric']
            ]);
            $song->save();

            $singer = DB::table('singers')
                ->where('singer_name', '=', $validateData['singer_name'])
                ->first();
            DB::table('song_singers')
                ->insert([
                    'song_id' => $song->song_id,
                    'singer_id' => $singer->singer_id
                ]);
            return redirect()->route('songs');
        }

        return redirect()->route('songs.create')->withErrors($validateData);
    }
}
