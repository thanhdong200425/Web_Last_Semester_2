import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { getAlbumns } from '~/apis/albumn';

function Albumn() {
    const [albumns, setAlbumns] = useState([]);
    useEffect(() => {
        const callApi = async () => {
            const request = await getAlbumns();
            setAlbumns(request.data);
        };
        callApi();
    }, []);
    console.log(albumns);

    return (
        <main>
            {/* songs for you  */}
            <div class="banner">
                <img src="../img/banner_songs_of_summer.png" alt="" />
            </div>
            <div id="foryou" className="foryou mt-2">
                <div className="title">
                    <h3>
                        <a href="">For you</a>
                    </h3>
                    <a href="">
                        <i className="bx bx-chevron-right bx-md" />
                    </a>
                </div>
                <div className="songs_foryou row">
                    {albumns.length > 0 &&
                        albumns.map((albumn, index) => {
                            return (
                                <div
                                    key={albumn.id}
                                    className="col-md-3 col-sm-6 mt-4 h-[350px]"
                                >
                                    <a href="/a">
                                        <div className="item h-full">
                                            <div className="img">
                                                <div id="icon_play">
                                                    <i className="bx bx-play bx-lg" />
                                                </div>
                                                <img
                                                    src={
                                                        albumn.albumn_photo ||
                                                        '../img/albumn_99.jpg'
                                                    }
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
                                                    {/* <b>Description</b> */}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </main>
    );
}

export default Albumn;
