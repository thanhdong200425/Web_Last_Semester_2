import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getAlbumns } from '~/apis/albumn.api';
import { getSongs } from '~/apis/song.api';
import { AuthContext } from '~/context/AuthContext';
import { SongContext } from '~/context/SongContext';

function Home() {
    const { currentUser } = useContext(AuthContext);
    const { setCurrentSongList, currentSongIndex } = useContext(SongContext);
    const [albumns, setAlbumns] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAlbumns();
            setAlbumns(request.data);
        };
        const callApi2 = async () => {
            const request = await getSongs();
            setSongs(request.data);
        };

        callApi();
        callApi2();
    }, []);
    return (
        <main>
            {/* songs for you  */}
            <div id="foryou" className="foryou">
                <div className="title">
                    <h3>
                        <a href="">For you</a>
                    </h3>
                    <Link to="/albumn">
                        <i className="bx bx-chevron-right bx-md" />
                    </Link>
                </div>
                <div className="songs_foryou row">
                    {albumns.length > 0 &&
                        albumns.map((albumn, index) => {
                            if (index < 4)
                                return (
                                    <div
                                        key={albumn.albumn_id}
                                        className="col-md-3 col-sm-6 h-[350px]"
                                    >
                                        <Link
                                            to={
                                                '/detail_albumn/' +
                                                albumn.albumn_id
                                            }
                                        >
                                            <div className="item h-full">
                                                <div className="img">
                                                    <div id="icon_play">
                                                        <i className="bx bx-play bx-lg" />
                                                    </div>
                                                    <img
                                                        src={
                                                            `../image/album/${albumn.albumn_photo}` ||
                                                            '../img/albumn_99.jpg'
                                                        }
                                                        className="max-h-56 object-cover"
                                                        alt="albumn_99%"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        <h3 className="text-xl">
                                                            {albumn.albumn_name ||
                                                                'Title'}
                                                        </h3>
                                                    </div>
                                                    <div className="desc">
                                                        {/* <b>
                                                            {
                                                                albumn.albumn_description
                                                            }
                                                        </b> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                        })}
                </div>
            </div>
            {/* Countinue listening - Trending Singers */}
            {/* <div className="continue_trending row">
                <div className="col-sm-6 continue_listening">
                    <div className="title">
                        <h3>
                            <a href="">Continue listening</a>
                        </h3>
                        <a href="">
                            <i className="bx bx-chevron-right bx-md" />
                        </a>
                    </div>
                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="100%"
                            />
                        </div>
                        <a href="" className="col-sm-8 detail">
                            <h5>Tại vì sao</h5>
                            <h6>RPT MCK</h6>
                        </a>
                    </div>
                </div>
                <div className="col-sm-6 trending_singers">
                    <div className="title ">
                        <h3>
                            <a href="singers.html">Trending singers</a>
                        </h3>
                        <a href="singers.html">
                            <i className="bx bx-chevron-right bx-md" />
                        </a>
                    </div>
                    <div className="content row">
                        <div className="col-sm-3">
                            <a href="detail_singer.html" className="image">
                                <img
                                    src="../img/HIEUTHUHAI.jpg"
                                    alt=""
                                    width="100%"
                                />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">HIEUTHUHAI</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a href="detail_singer.html" className="image">
                                <img src="../img/MCK.jpg" alt="" width="100%" />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">RPT MCK</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a href="detail_singer.html" className="image">
                                <img
                                    src="../img/OBITO.jpg"
                                    alt=""
                                    width="100%"
                                />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">Obito</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a href="detail_singer.html" className="image">
                                <img
                                    src="../img/SONTUNGMTP.jpg"
                                    alt=""
                                    width="100%"
                                />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">Sơn Tùng MTP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Latest songs  */}
            <div id="latestsongs" className="foryou">
                <div className="title">
                    <h3>
                        <a href="">Latest Songs</a>
                    </h3>
                    <Link to="/featured_song">
                        <i className="bx bx-chevron-right bx-md" />
                    </Link>
                </div>
                <div className="songs_foryou row">
                    {songs.length > 0 &&
                        songs.map(
                            (song, index) =>
                                index < 4 && (
                                    <div
                                        key={index}
                                        className="col-md-3 col-sm-6"
                                    >
                                        <a>
                                            <div className="item h-[425px]">
                                                <div className="img">
                                                    <div
                                                        id="icon_play"
                                                        onClick={() =>
                                                            setCurrentSongList([
                                                                song,
                                                            ])
                                                        }
                                                        className="cursor-pointer"
                                                    >
                                                        <i className="bx bx-play bx-lg" />
                                                    </div>
                                                    <img
                                                        src={
                                                            `../image/song/${song.song_photo}` ||
                                                            '../img/albumn_obito.jpg'
                                                        }
                                                        alt="albumn_99%"
                                                    />
                                                </div>
                                                <div className="content text-gray-200">
                                                    <div className="title">
                                                        <h3>
                                                            {song.song_name ||
                                                                'Title'}
                                                        </h3>
                                                    </div>
                                                    <div className="desc">
                                                        <b>
                                                            {song.singers?.map(
                                                                (singer) =>
                                                                    singer,
                                                            ) || 'RPT MCK'}
                                                        </b>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ),
                        )}
                </div>
            </div>
        </main>
    );
}

export default Home;
