import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { getAlbumns } from '~/apis/albumn.api';

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
                                    key={albumn.albumn_id}
                                    className="col-md-3 col-sm-6 h-[350px]"
                                >
                                    <Link
                                        to={
                                            '/detail_albumn/' + albumn.albumn_id
                                        }
                                    >
                                        <div className="item h-full">
                                            <div className="img">
                                                <div id="icon_play">
                                                    <i className="bx bx-play bx-lg" />
                                                </div>
                                                <img
                                                    src={
                                                        `../image/album/${albumn?.albumn_photo}` ||
                                                        '../img/albumn_99.jpg'
                                                    }
                                                    className='max-h-56 object-cover'
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
        </main>
    );
}

export default Albumn;
