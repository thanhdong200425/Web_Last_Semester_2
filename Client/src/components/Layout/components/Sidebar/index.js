import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllPlaylist } from '~/apis/playlist.api';

function Sibar() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAllPlaylist();
            request?.status && setPlaylists(request.data);
        };
        callApi();
    }, []);

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
            <div className="menu">
                <h6>Playlist</h6>
                {playlists.length > 0 &&
                    playlists.map((playlist) => (
                        <Link
                            key={playlist.playlist_id}
                            to={`/playlist/${playlist.playlist_id}`}
                            className="menu_title"
                        >
                            <b className="title">{playlist.playlist_name}</b>
                        </Link>
                    ))}
            </div>
        </aside>
    );
}

export default Sibar;
