import { Link } from 'react-router-dom';

function Sibar() {
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
                <Link to="" className="menu_title">
                    <b className="title">Playlist1</b>
                </Link>
                <Link to="" className="menu_title">
                    <b className="title">Playlist2</b>
                </Link>
                <Link to="" className="menu_title">
                    <b className="title">Playlist3</b>
                </Link>
                <Link to="" className="menu_title">
                    <b className="title">Playlist4</b>
                </Link>
                <Link to="" className="menu_title">
                    <b className="title">Playlist5</b>
                </Link>
            </div>
        </aside>
    );
}

export default Sibar;
