import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

import SubmitPost from '~/components/pages/forum/SubmitPost';
import getPostList from '~/services/api-calls/getPostList';

function DetailSinger() {
    return (
        <main>
                        <div className="header wrapper-in4_singer ">
                            <div className="in4_singer">
                                <div className="img_singer">
                                    <img
                                        src="../img/MCK.jpg"
                                        alt=""
                                        width="100%"
                                    />
                                </div>
                                <div className="name-follows">
                                    <div className="name">
                                        <p>MCK</p>
                                    </div>
                                    <div className="follows">
                                        <p>77.449 followers</p>
                                        <button className="follow">
                                            <i className="bx bx-user-plus bx-sm"></i>
                                            <span>Follow</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-main ">
                            {/* <!-- wrapper-featured_songs --> */}
                            <div className="wrapper-featured_songs ">
                                <div className="title d-flex justify-content-between aglin-item-center">
                                    <h3>
                                        <a href="">Featured Songs</a>
                                    </h3>
                                    <a href="">
                                        <i className="bx bx-chevron-right bx-md"></i>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                            <div className="container_song d-flex justify-content-between aglin-item-center">
                                                <div className="song d-flex">
                                                    <div className="image_song">
                                                        <button className="play">
                                                            <i className="bx bx-play  bx-md text-white"></i>
                                                        </button>
                                                        <img
                                                            src="../img/taivisao_mck.jpg"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <div className="content_song">
                                                        <span className="title">
                                                            Name of song (ft.
                                                            singer2)
                                                        </span>
                                                        <br />
                                                        <span className="singers">
                                                            <a href="">MCK,</a>
                                                            <a href="">
                                                                singer 2
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="buttons">
                                                    <button className="heart">
                                                        <i className="bx bx-heart text-white"></i>
                                                    </button>
                                                    <button className="more">
                                                        <i className="bx bx-dots-horizontal-rounded text-white"></i>
                                                    </button>
                                                </div>
                                                <div className="time song_1">
                                                    <p>3:47</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- wrapper-albumn --> */}
                            <div className="wrapper-albumn mt-5">
                                <div className="title d-flex justify-content-between aglin-item-center">
                                    <h3>
                                        <a href="">Albumns</a>
                                    </h3>
                                    <a href="">
                                        <i className="bx bx-chevron-right bx-md"></i>
                                    </a>
                                </div>
                                <div className="content row">
                                    <div className="item col-sm-3">
                                        <div className="imgage_album">
                                            <a href="">
                                                <img
                                                    src="../img/albumn_99.jpg"
                                                    alt=""
                                                    width="100%"
                                                />
                                            </a>
                                            <div id="" className="buttons">
                                                <button className="heart">
                                                    <i className="bx bx-heart"></i>
                                                </button>
                                                <button className="play">
                                                    <i className="bx bx-play"></i>
                                                </button>
                                                <button className="more">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info_albumn">
                                            <a href="" className="albumn_name">
                                                99%
                                            </a>
                                            <p className="released">3/2023</p>
                                        </div>
                                    </div>
                                    <div className="item col-sm-3">
                                        <div className="imgage_album">
                                            <a href="">
                                                <img
                                                    src="../img/albumn_99.jpg"
                                                    alt=""
                                                    width="100%"
                                                />
                                            </a>
                                            <div id="" className="buttons">
                                                <button className="heart">
                                                    <i className="bx bx-heart"></i>
                                                </button>
                                                <button className="play">
                                                    <i className="bx bx-play"></i>
                                                </button>
                                                <button className="more">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info_albumn">
                                            <a href="" className="albumn_name">
                                                99%
                                            </a>
                                            <p className="released">3/2023</p>
                                        </div>
                                    </div>
                                    <div className="item col-sm-3">
                                        <div className="imgage_album">
                                            <a href="">
                                                <img
                                                    src="../img/albumn_99.jpg"
                                                    alt=""
                                                    width="100%"
                                                />
                                            </a>
                                            <div id="" className="buttons">
                                                <button className="heart">
                                                    <i className="bx bx-heart"></i>
                                                </button>
                                                <button className="play">
                                                    <i className="bx bx-play"></i>
                                                </button>
                                                <button className="more">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info_albumn">
                                            <a href="" className="albumn_name">
                                                99%
                                            </a>
                                            <p className="released">3/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- wrapper-playlist --> */}
                            <div className="wrapper-playlist mt-5">
                                <div className="title d-flex justify-content-between aglin-item-center">
                                    <h3>
                                        <a href="">Playlist</a>
                                    </h3>
                                    <a href="">
                                        <i className="bx bx-chevron-right bx-md"></i>
                                    </a>
                                </div>
                                <div className="content row">
                                    <div className="item col-sm-3">
                                        <div className="imgage_album">
                                            <a href="">
                                                <img
                                                    src="../img/albumn_99.jpg"
                                                    alt=""
                                                    width="100%"
                                                />
                                            </a>
                                            <div id="" className="buttons">
                                                <button className="heart">
                                                    <i className="bx bx-heart"></i>
                                                </button>
                                                <button className="play">
                                                    <i className="bx bx-play"></i>
                                                </button>
                                                <button className="more">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info_albumn">
                                            <a href="" className="albumn_name">
                                                99%
                                            </a>
                                            <p className="released">3/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Mayybe like another singer --> */}
                            <div className="wrapper-maybelike mt-5">
                                <div className="title d-flex justify-content-between aglin-item-center">
                                    <h3>
                                        <a href="">Maybe Like</a>
                                    </h3>
                                    <a href="">
                                        <i className="bx bx-chevron-right bx-md"></i>
                                    </a>
                                </div>
                                <div className="content mt-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="in4_singer">
                                                <div className="img_singer ">
                                                    <img
                                                        src="../img/MCK.jpg"
                                                        alt=""
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="name-follows_maybelike">
                                                    <div className="name">
                                                        <a href="">
                                                            <p>MCK</p>
                                                        </a>
                                                        <p>77.449 followers</p>
                                                    </div>
                                                    <div className="follows">
                                                        <button className="follow">
                                                            <i className="bx bx-user-plus bx-sm"></i>
                                                            <span>Follow</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="in4_singer">
                                                <div className="img_singer ">
                                                    <img
                                                        src="../img/OBITO.jpg"
                                                        alt=""
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="name-follows_maybelike">
                                                    <div className="name">
                                                        <a href="">
                                                            <p>Obito</p>
                                                        </a>
                                                        <p>77.449 followers</p>
                                                    </div>
                                                    <div className="follows">
                                                        <button className="follow">
                                                            <i className="bx bx-user-plus bx-sm"></i>
                                                            <span>Follow</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="in4_singer">
                                                <div className="img_singer ">
                                                    <img
                                                        src="../img/HIEUTHUHAI.jpg"
                                                        alt=""
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="name-follows_maybelike">
                                                    <div className="name">
                                                        <a href="">
                                                            <p>HIEUTHUHAI</p>
                                                        </a>
                                                        <p>77.449 followers</p>
                                                    </div>
                                                    <div className="follows">
                                                        <button className="follow">
                                                            <i className="bx bx-user-plus bx-sm"></i>
                                                            <span>Follow</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="in4_singer">
                                                <div className="img_singer ">
                                                    <img
                                                        src="../img/SONTUNGMTP.jpg"
                                                        alt=""
                                                        width="100%"
                                                    />
                                                </div>
                                                <div className="name-follows_maybelike">
                                                    <div className="name">
                                                        <a href="">
                                                            <p>Sơn Tùng MTP</p>
                                                        </a>
                                                        <p>77.449 followers</p>
                                                    </div>
                                                    <div className="follows">
                                                        <button className="follow">
                                                            <i className="bx bx-user-plus bx-sm"></i>
                                                            <span>Follow</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- About singer  --> */}
                            <div className="wrapper-about mt-5">
                                <div className="title d-flex justify-content-between aglin-item-center">
                                    <h3>
                                        <a href="">About MCK</a>
                                    </h3>
                                    <a href="">
                                        <i className="bx bx-chevron-right bx-md"></i>
                                    </a>
                                </div>
                                <div className="content d-flex mt-3">
                                    <div className="pic">
                                        <img
                                            src="../img/MCK.jpg"
                                            alt=""
                                            width="100%"
                                        />
                                    </div>
                                    <div className="desc">
                                        <p className="info">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Laudantium, provident sed! Deserunt,
                                            doloribus reiciendis, laudantium a
                                            est molestiae expedita, amet impedit
                                            officiis nesciunt similique?
                                            Quibusdam similique totam iusto est
                                            veniam.Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Laudantium, provident sed! Deserunt,
                                            doloribus reiciendis, laudantium a
                                            est molestiae expedita, amet impedit
                                            officiis nesciunt similique?
                                            Quibusdam similique totam iusto est
                                            veniam.
                                        </p>
                                        <p className="followers">
                                            <b>96.740</b>
                                            <br />
                                            <span>Followers</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
    );
}

export default DetailSinger;
