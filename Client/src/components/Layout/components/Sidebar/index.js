import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
    getAllPlaylist,
    addPlaylist,
    removePlaylist,
} from '~/apis/playlist.api';
import { AuthContext } from '~/context/AuthContext';

function Sibar() {
    const {currentUser} = useContext(AuthContext);
    const [playlists, setPlaylists] = useState([]);
    const playlistInp = useRef(null);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAllPlaylist();
            request?.status && setPlaylists(request.data);
        };
        callApi();
    }, []);

    const addPlaylistHandle = async () => {
        const response = await addPlaylist(playlistInp.current.value);
        response?.status && toast.success('Added playlist');
        !response?.status && toast.error('Cannot add playlist');
    };

    const removePlaylistHandle = async (playlist_id) => {
        const response = await removePlaylist(playlist_id);
        response?.status && toast.success('Removed playlist');
        !response?.status && toast.error('Cannot remove playlist');
    };

    return (
        <aside>
            {/* sidebar */}
            <div className="logo ">
                <Link to="/" id="logo">
                    <i
                        id="icon_logo"
                        className="bx bxl-spotify bx-lg text-white"
                    />
                    <b>Spytifo</b>
                </Link>
            </div>
            <div className="menu">
                <h6>Menu</h6>
                <Link
                    id="home"
                    to="/"
                    className={
                        'menu_title ' +
                        (window.location.pathname === '/' && 'sidebar-active')
                    }
                >
                    <i className="bx bxs-home-alt-2 bx-sm" />
                    <b className="title">Home</b>
                </Link>
                <Link
                    id="albumns"
                    to="/albumn"
                    className={
                        'menu_title ' +
                        (window.location.pathname === '/ablumns' &&
                            'sidebar-active')
                    }
                >
                    <i className="bx bxs-book-bookmark bx-sm" />
                    <b className="title">Albumns</b>
                </Link>
                <Link
                    id="songs"
                    to="/featured_song"
                    className={
                        'menu_title ' +
                        (window.location.pathname === '/featured_song' &&
                            'sidebar-active')
                    }
                >
                    <i className="bx bxs-music bx-sm" />
                    <b className="title">Songs</b>
                </Link>
            </div>
            {currentUser && <div className="menu">
                <h6>Playlist</h6>
                <div className="flex justify-between items-center">
                    <input
                        ref={playlistInp}
                        type="text"
                        className="text-xl h-8 w-24"
                    />
                    <button onClick={addPlaylistHandle}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                {playlists.length > 0 &&
                    playlists.map((playlist) => (
                        <div
                            key={playlist.playlist_id}
                            className="flex justify-between"
                        >
                            <Link
                                to={`/playlist/${playlist.playlist_id}`}
                                className="menu_title min-w-[90px]"
                            >
                                <b className="title">
                                    {playlist.playlist_name}
                                </b>
                            </Link>
                            <button
                                onClick={() =>
                                    removePlaylistHandle(playlist.playlist_id)
                                }
                            >
                                <i class="fa-solid fa-minus"></i>
                            </button>
                        </div>
                    ))}
            </div>}
        </aside>
    );
}

export default Sibar;
