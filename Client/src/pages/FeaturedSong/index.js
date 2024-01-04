import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { SongContext } from '~/context/SongContext';
import { getSongs } from '~/apis/song.api';
import { getAllPlaylist } from '~/apis/playlist.api';
import { addSong } from '~/apis/playlist.api';

function FeaturedSong() {
    const { setCurrentSongList, currentSongIndex } = useContext(SongContext);

    const [songs, setSongs] = useState([]);
    const [showPlaylistOption, setShowPlaylistOption] = useState(-1);
    const [playlists, setPlaylists] = useState([]);
    const [addSongData, setAddSongData] = useState(null);

    useEffect(() => {
        const callApi = async () => {
            const request = await getSongs();
            setSongs(request.data);
        };
        callApi();
    }, []);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAllPlaylist();
            setPlaylists(request.data);
        };
        callApi();
    }, []);

    const playHandle = (index) => {
        setCurrentSongList(songs, index);
    };

    const addSongHandle = async (data) => {
        console.log('data', data);
        const request = await addSong(data);
        console.log(request);
        request?.status && toast.success('Added song to ' + data.playlistId);
        !request?.status && toast.error('Can not song to ' + data.playlistId);
    };

    return (
        <main>
            <div className="main_body row">
                <div className="title">
                    <h3>
                        <div className="text-white">Best of 2023 VietNam</div>
                    </h3>
                </div>

                {songs.length > 0 &&
                    songs.map((song, index) => (
                        <div key={index} className="content row h-20">
                            <div className="col-sm-1 numb">
                                <span>{index + 1 || 'Number'}</span>
                            </div>
                            <div className="col-sm-3 image p-0">
                                <img
                                    src={
                                        song.song_photo ||
                                        '../img/taivisao_mck.jpg'
                                    }
                                    alt={song.song_name || 'taivisao_mck'}
                                    width="80%"
                                    height="120"
                                />
                            </div>
                            <a
                                onClick={() => playHandle(index)}
                                className="col-sm-6 detail cursor-pointer"
                            >
                                <h5> {song.song_name || 'Tại vì sao ?'}</h5>
                                <h6>
                                    {' '}
                                    {song.singers?.map((singer) => singer) ||
                                        'RPT MCK'}
                                </h6>
                            </a>
                            <div className="relative col-sm-2 btn_group flex items-center">
                                <button
                                    onClick={() => playHandle(index)}
                                    className="btn_play"
                                >
                                    <svg
                                        className="fill-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => {
                                        if (showPlaylistOption === index) {
                                            setShowPlaylistOption(-1);
                                            setAddSongData(null);
                                        } else {
                                            setShowPlaylistOption(index);
                                            setAddSongData({
                                                songId: song?.song_id || 1,
                                            });
                                        }
                                    }}
                                    className="btn_play text-2xl"
                                >
                                    {showPlaylistOption === index ? (
                                        <i class="fa-solid fa-minus"></i>
                                    ) : (
                                        <i class="fa-solid fa-plus"></i>
                                    )}
                                </button>
                                <ul
                                    className={
                                        showPlaylistOption !== index
                                            ? 'hidden '
                                            : '' +
                                              'absolute top-10 z-50 bg-gray-600 px-4 py-2 rounded flex gap-2 flex-col'
                                    }
                                >
                                    {playlists.length > 0 &&
                                        playlists.map((playlist) => (
                                            <li>
                                                <div
                                                    onClick={() =>
                                                        addSongHandle({
                                                            ...addSongData,
                                                            playlistId:
                                                                playlist.playlist_id,
                                                        })
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                    {playlist.playlist_name}
                                                </div>
                                            </li>
                                        ))}
                                </ul>

                                {/* <button
                            className="btn_more border-none h-[35px] bg-color-[#013B44] fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 128 512"
                                className="float-right w-full"
                            >
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                            </svg>
                        </button> */}
                            </div>
                        </div>
                    ))}

                <br />
            </div>
        </main>
    );
}

export default FeaturedSong;
