import { useState } from "react";


function Playlist() {
    const [play, setPlay] = useState('pause');
    const handlePlay = (event) => {
        if (play === 'pause') setPlay('play')
        else setPlay('pause');
    }
    return (
        <main className="playlist_container">
            <div className="header wrapper-in4_playlist flex items-center bg-teal-800 text-white relative">
                <div className="in4_playlist">
                    <div className="img_playlist mr-10 w-48 h-full">
                        <img src="../img/playlist_img.jpg" alt="" width="100%" />
                    </div>
                    <div className="title-playlist h-full relative top-20">
                        <p className="subtitle text-sm">
                            Playlist
                        </p>
                        <h1 className="title w-full text-6xl font-bold my-6">
                            Playlist thanh long
                        </h1>
                        <div className="author gap-x-4 flex text-sm">
                            <a href="" className="author hover:text-white hover:underline">Author</a>
                            <p className="likes">444 likes</p>
                            <p className="songs">28 songs</p>
                            <p className="time text-gray-400">about 1 hour ago</p>
                        </div>
                    </div>
                </div>
            </div>
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
                <div className="list_playlist py-3 ">
                    <table className="table table-border table-hover">
                        <thead>
                            <tr  className="text-gray-300">
                                <td>
                                    <div className="px-4 flex gap-4">
                                        <span>#</span>
                                        <span>Title</span>
                                    </div>
                                </td>
                                <td><span>Album</span></td>
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
                                        <span>99%</span>
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
                                        <span>99%</span>
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
                                        <span>99%</span>
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
                                        <span>99%</span>
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
                                        <span>99%</span>
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
            </div>
        </main>
    );
}

export default Playlist;
