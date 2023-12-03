function Sibar() {
    return (
        <div className="col-sm-2" id="sidebar">
            <aside>
                {/* <!-- sidebar --> */}
                <div className="logo">
                    <a href="#" id="logo">
                        <i className="bx bxl-spotify bx-lg"></i>
                        <b>Spytifo</b>
                    </a>
                </div>
                <div className="menu">
                    <h6>Menu</h6>
                    <a id="home" href="" className="menu_title">
                        <i className="bx bxs-home-alt-2 bx-sm"></i>
                        <b className="title">Home</b>
                    </a>
                    <a id="albumns" href="" className="menu_title">
                        <i className="bx bxs-book-bookmark bx-sm"></i>
                        <b className="title">Albumns</b>
                    </a>
                    <a id="songs" href="" className="menu_title">
                        <i className="bx bxs-music bx-sm"></i>
                        <b className="title">Songs</b>
                    </a>
                </div>

                <div className="menu">
                    <h6>Playlist</h6>
                    <a href="" className="menu_title">
                        <b className="title">Playlist1</b>
                    </a>
                    <a href="" className="menu_title">
                        <b className="title">Playlist2</b>
                    </a>
                    <a href="" className="menu_title">
                        <b className="title">Playlist3</b>
                    </a>
                    <a href="" className="menu_title">
                        <b className="title">Playlist4</b>
                    </a>
                    <a href="" className="menu_title">
                        <b className="title">Playlist5</b>
                    </a>
                </div>
            </aside>
        </div>
    );
}

export default Sibar;
