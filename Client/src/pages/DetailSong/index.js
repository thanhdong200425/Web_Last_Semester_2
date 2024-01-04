import { useEffect, useState, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailSong() {

    return (
        <>
            <main>
                <div className="wrapper">
                    <div className="DetaildSong_header">
                        <div className="header_left">
                            <nav className="nav_bar">
                                <ul>
                                    <li className="w-[250px] text-center">
                                        <a href="">Danh sách phát</a>
                                    </li>
                                    <li className="w-[250px] text-center">
                                        <a href="">Lời bài hát</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header_right">
                            <div className="btn_container">
                                <div
                                    className="btn_full_scr"
                                    onClick="toggleFullscreen()"
                                >
                                    <a href="">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>

                                <div className="btn_setting">
                                    <a href="">
                                        <i className="fas fa-gear"></i>
                                    </a>
                                </div>

                                <div className="btn_exit">
                                    <a href="/">
                                        <i className="fas fa-xmark fa-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <main>
                        <div className="col-sm-6 body_left">
                            <img
                                src="../img/X_Album.jpg"
                                alt=""
                                width="60%"
                                height="60%"
                            />
                        </div>
                        <div className="col-sm-6 body_right">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aut dignissimos provident
                                quidem. Magnam odio esse fugit animi dolores
                                incidunt aliquid neque saepe minus? Inventore
                                expedita perspiciatis dicta sit voluptatem
                                necessitatibus! Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Aut dignissimos
                                provident quidem. Magnam odio esse fugit animi
                                dolores incidunt aliquid neque saepe minus?
                                Inventore expedita perspiciatis dicta sit
                                voluptatem necessitatibus! Lorem ipsum dolor
                                sit, amet consectetur adipisicing elit. Aut
                                dignissimos provident quidem. Magnam odio esse
                                fugit animi dolores incidunt aliquid neque saepe
                                minus? Inventore expedita perspiciatis dicta sit
                                voluptatem necessitatibus!
                            </p>
                        </div>
                    </main>

                    <div className="DetaildSong_footer">
                        <div className="songtitle_wrapper">
                            <span className="song_title">Photograph</span>
                            <span className="space"> - </span>
                            <span className="artist_title">Ed Sheeran</span>
                        </div>

                        <div className="progress-wrapper">
                            <span className="current_time">0:00</span>
                            <progress
                                id="myProgressBar"
                                value="0"
                                max="100"
                            ></progress>
                            <span className="duration_time">0:00</span>
                        </div>

                        <div className="group_button">
                            <button className="btn_replay">
                                <i className="fa-solid fa-rotate-left"></i>
                            </button>

                            <button className="btn_pre_song">
                                <i className="fa-solid fa-backward-step"></i>
                            </button>

                            <button className="btn_pause_run">
                                <i className="fa-regular fa-circle-pause fa-xl"></i>
                                <i className="fa-regular fa-circle-play fa-xl hidden"></i>
                            </button>

                            <button className="btn_next_song">
                                <i className="fa-solid fa-forward-step"></i>
                            </button>

                            <button className="btn_random">
                                <i className="fa-solid fa-shuffle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <script src="./js/detail_song.js"></script>
        </>
    );
}

export default DetailSong;
