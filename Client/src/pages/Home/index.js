import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, initTE } from 'tw-elements';

import getGoalList from '~/services/api-calls/getGoalList';

function Home() {
    return (
        <main>
            {/* songs for you  */}
            <div id="foryou" className="foryou">
                <div className="title">
                    <h3>
                        <a href="">For you</a>
                    </h3>
                    <a href="">
                        <i className="bx bx-chevron-right bx-md" />
                    </a>
                </div>
                <div className="songs_foryou row">
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_99.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_99.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_99.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_99.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Countinue listening - Trending Singers */}
            <div className="continue_trending row">
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
                                <img src="../img/HIEUTHUHAI.jpg" alt="" width="100%" />
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
                                <img src="../img/OBITO.jpg" alt="" width="100%" />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">Obito</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a href="detail_singer.html" className="image">
                                <img src="../img/SONTUNGMTP.jpg" alt="" width="100%" />
                            </a>
                            <div className="singer_name">
                                <a href="detail_singer.html">Sơn Tùng MTP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Latest songs  */}
            <div id="latestsongs" className="foryou">
                <div className="title">
                    <h3>
                        <a href="">Latest Songs</a>
                    </h3>
                    <a href="">
                        <i className="bx bx-chevron-right bx-md" />
                    </a>
                </div>
                <div className="songs_foryou row">
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_obito.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_obito.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_obito.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="">
                            <div className="item">
                                <div className="img">
                                    <div id="icon_play">
                                        <i className="bx bx-play bx-lg" />
                                    </div>
                                    <img src="../img/albumn_obito.jpg" alt="albumn_99%" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="desc">
                                        <b>Description</b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Home;
