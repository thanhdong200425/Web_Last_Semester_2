import { useState } from "react";


function Create_playlist() {
    const [play, setPlay] = useState('pause');
    const handlePlay = (event) => {
        if (play === 'pause') setPlay('play')
        else setPlay('pause');
    }
    return (
        <main className="playlist_container create_playlist_container">
            <form action="" method="post">
                <div className="header wrapper-in4_playlist flex items-center bg-teal-800 text-white relative">
                    <div className="in4_playlist">
                        <div className="img_playlist mr-10 w-48 h-full relative">
                            <img src="../img/playlist_img.jpg" alt="" width="100%" />
                            <input type="file" className="absolute bottom-3 left-12 w-24 " />
                        </div>
                        <div className="title-playlist h-full relative top-20">
                            <input className="subtitle text-sm border-solid bg-transparent outline-none" type="text" name="playlistName" placeholder="Playlist name ..." />

                            <h1 className="title w-full text-6xl font-bold my-6">
                                <input className="title_input bg-transparent  outline-none" name="titleName" placeholder="Title playlist ..." />
                            </h1>
                            <div className="author gap-x-4 flex text-sm">
                                <a href="" className="author hover:text-white hover:underline flex items-center gap-2">
                                    <div className="img_author w-8 h-8 ">
                                        <img src="../img/MCK.jpg" className="w-full rounded-full" />
                                    </div>
                                    <span>Author</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="container-main_playlist p-3">
                <div className="header flex items-center gap-x-6">
                    <button className={"btn-play btn-play  btn-play__playlist text-white " + play} onClick={() => handlePlay()}>
                        <span />
                        <span />

                    </button>
                    <div className="heart_playlist text-4xl	">
                        <i className="bx bxs-heart" id="heart2" />
                    </div>
                </div>
                {/* List song in playlist */}
                <div className="list_playlist py-3 ">
                    <table className="table table-border table-hover align-middle">
                        <thead>
                            <tr className="text-gray-300">
                                <td>
                                    <div className="px-4 flex gap-4">
                                        <span>#</span>
                                        <span>Title</span>
                                    </div>
                                </td>
                                <td><span>Views</span></td>
                                <td><span>Date</span></td>
                                <td><span><i class='bx bx-time-five text-gray-300' ></i></span></td>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td>
                                    <a href="" className="text-white flex items-center gap-3">
                                        <div className="stt">
                                            <span>1</span>
                                            <i class='bx bx-play bx-md'></i>
                                        </div>
                                        <div className="img_song img_song_playlist">
                                            <img
                                                className="h-10 w-10 rounded-md"
                                                src="../img/taivisao_mck.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="name_song name_song_playlist">
                                            <p className="font-bold">Tại vì sao</p>
                                            <span className="singer_song singer_song_playlist text-xs text-gray-400">
                                                MCK
                                            </span>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-gray-400 name_albumn name_album_playlist">
                                        <span>12.343.000</span>
                                    </a>
                                </td>
                                <td>
                                    <div className="date_create_playlist text-white">
                                        <p>12/11/2023</p>
                                    </div>
                                </td>
                                <td><span className="times text-white">3:14</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="" className="text-white flex items-center gap-3">
                                        <div className="stt">
                                            <span>1</span>
                                            <i class='bx bx-play bx-md'></i>
                                        </div>
                                        <div className="img_song img_song_playlist">
                                            <img
                                                className="h-10 w-10 rounded-md"
                                                src="../img/taivisao_mck.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="name_song name_song_playlist">
                                            <p className="font-bold">Tại vì sao</p>
                                            <span className="singer_song singer_song_playlist text-xs text-gray-400">
                                                MCK
                                            </span>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-gray-400 name_albumn name_album_playlist">
                                        <span>12.343.000</span>
                                    </a>
                                </td>
                                <td>
                                    <div className="date_create_playlist text-white">
                                        <p>12/11/2023</p>
                                    </div>
                                </td>
                                <td><span className="times text-white">3:14</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="text-white my-3" />
                <div className="search_song_playlist text-white">
                    <b>Please find songs for your playlist</b>
                    <form method="post" action="" className="search_input_playlist">
                        <i class='bx bx-search'></i>
                        <input type="text" className="text-gray-500" placeholder="Searching ..." />
                    </form>
                </div>

                {/* List songs to add to playlist */}
                <div className="list_playlist py-3 ">
                    <form method="post" action="">
                        <table className="table table-border table-hover align-middle">
                            <tbody className="">
                                <tr>
                                    <td>
                                        <a href="" className="text-white flex items-center gap-3">
                                            <div className="stt">
                                                <span>1</span>
                                                <i class='bx bx-play bx-md'></i>
                                            </div>
                                            <div className="img_song img_song_playlist">
                                                <img
                                                    className="h-10 w-10 rounded-md"
                                                    src="../img/taivisao_mck.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="name_song name_song_playlist">
                                                <p className="font-bold">Tại vì sao</p>
                                                <span className="singer_song singer_song_playlist text-xs text-gray-400">
                                                    MCK
                                                </span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="" className="text-gray-400 name_albumn name_album_playlist">
                                            <span>12.343.000</span>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="date_create_playlist text-white">
                                            <p>12/11/2023</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn_addSong_playlist">
                                            <button type="submit" className="w-auto h-auto m-0 hover:bg-transparent border border-solid p-2 rounded-3xl">
                                                Add
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="" className="text-white flex items-center gap-3">
                                            <div className="stt">
                                                <span>1</span>
                                                <i class='bx bx-play bx-md'></i>
                                            </div>
                                            <div className="img_song img_song_playlist">
                                                <img
                                                    className="h-10 w-10 rounded-md"
                                                    src="../img/taivisao_mck.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="name_song name_song_playlist">
                                                <p className="font-bold">Tại vì sao</p>
                                                <span className="singer_song singer_song_playlist text-xs text-gray-400">
                                                    MCK
                                                </span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="" className="text-gray-400 name_albumn name_album_playlist">
                                            <span>12.343.000</span>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="date_create_playlist text-white">
                                            <p>12/11/2023</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn_addSong_playlist">
                                            <button type="submit" className="w-auto h-auto m-0 hover:bg-transparent border border-solid p-2 rounded-3xl">
                                                Add
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        </main>
    );
}

export default Create_playlist;
