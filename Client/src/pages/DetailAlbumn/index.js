import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getAlbumn } from '~/apis/albumn.api';
import { addSong } from '~/apis/playlist.api';

import { SongContext } from '~/context/SongContext';
import { getAllPlaylist } from '~/apis/playlist.api';

function DetailAlbumn() {
    const { setCurrentSongList, currentSongIndex } = useContext(SongContext);
    const { albumn_id } = useParams();
    const [showPlaylistOption, setShowPlaylistOption] = useState(-1);
    const [albumn, setAlbumn] = useState(null);
    const [addSongData, setAddSongData] = useState(null);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAlbumn(albumn_id);
            setAlbumn(request.data);
        };
        callApi();
    }, []);

    useEffect(() => {
        const callApi = async () => {
            const request = await getAllPlaylist();
            setPlaylists(request.data);
        };
        callApi();
    }, []);

    const addSongHandle = async (data) => {
        console.log('data', data);
        const request = await addSong(data);
        console.log(request);
        request?.status && toast.success('Added song to ' + data.playlistId);
        !request?.status && toast.error('Can not song to ' + data.playlistId);
    };

    return (
        <main>
            <div className="main_body row">
                <div className="col-sm-6 left_body">
                    <div className="img_body">
                        <img
                            src={
                                albumn?.albumn_photo ||
                                '../img/banner_album.jpg'
                            }
                            alt=""
                        />
                    </div>

                    <br />

                    <div className="title_album row">
                        <div className="col-sm-7 left_title_album">
                            {/* <h2> Life kit : Selfcare</h2> */}
                            <p>
                                Songs quatity:{' '}
                                <span> {albumn?.songs?.length || '7'} </span>
                            </p>
                        </div>
                        <div className="col-sm-5 right_title_album flex">
                            {/* <button className="button_follow"> Follow </button>
                            <button className="button_share"> Share </button> */}
                        </div>
                    </div>

                    <br />

                    <div className="About_box">
                        <h3>{albumn?.albumn_name || 'Albumn'}</h3>
                        <p>{albumn?.albumn_description || 'Description'}</p>
                    </div>
                </div>

                <div className="col-sm-6 right_body">
                    <div className="title">
                        <h3>
                            <a href="">All the song</a>
                        </h3>
                        {/* <!-- <a href=""><i className='bx bx-chevron-right bx-md'></i></a> --> */}
                    </div>

                    {albumn?.songs?.map((song, index) => (
                        <>
                            <div key={index} className="content row h-20 block">
                                <div className="col-sm-3 p-0">
                                    <img
                                        src={
                                            song.song_photo ||
                                            '../img/taivisao_mck.jpg'
                                        }
                                        alt={song.song_name || 'taivisao_mck'}
                                        className="w-11 h-12 ml-4 mt-1 rounded"
                                    />
                                </div>
                                <a className="col-sm-6 detail mt-0">
                                    <h5> {song.song_name || 'Tại vì sao ?'}</h5>
                                    <h6 className="mt-0">
                                        {song.singers.map(
                                            (singer) => singer.singer_name,
                                        ) || 'RPT MCK'}
                                    </h6>
                                </a>
                                <div className="col-sm-2 btn_group flex relative">
                                    <button
                                        onClick={() =>
                                            setCurrentSongList(
                                                albumn.songs,
                                                index,
                                            )
                                        }
                                        className="btn_play"
                                    >
                                        <svg
                                            className="fill-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 384 512"
                                            width={45}
                                        >
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                        </svg>
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (showPlaylistOption === index) {
                                                setShowPlaylistOption(-1);
                                                setAddSongData(null);
                                            } else {
                                                setShowPlaylistOption(index);
                                                setAddSongData({
                                                    songId: song?.song_id || 1,
                                                });
                                            }
                                        }}
                                        className="btn_play text-2xl"
                                    >
                                        {showPlaylistOption === index ? (
                                            <i className="fa-solid fa-minus w-[45px]"></i>
                                        ) : (
                                            <i className="fa-solid fa-plus w-[45px]"></i>
                                        )}
                                    </button>
                                    <ul
                                        className={
                                            showPlaylistOption !== index
                                                ? 'hidden '
                                                : '' +
                                                  'absolute top-10 z-50 bg-gray-600 px-4 py-2 rounded flex gap-2 flex-col'
                                        }
                                    >
                                        {playlists.length > 0 &&
                                            playlists.map((playlist) => (
                                                <li>
                                                    <div
                                                        onClick={() =>
                                                            addSongHandle({
                                                                ...addSongData,
                                                                playlistId:
                                                                    playlist.playlist_id,
                                                            })
                                                        }
                                                        className="cursor-pointer"
                                                    >
                                                        {playlist.playlist_name}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>

                                    {/* <button
                            className="btn_more border-none h-[35px] bg-color-[#013B44] fill-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 128 512"
                                className="float-right w-full"
                            >
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                            </svg>
                        </button> */}
                                </div>
                            </div>

                            <br />
                        </>
                    ))}
                    {/* <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button className="btn_more border-none h-[35px] bg-[#272727] fill-white">
                                <svg
                                    className=" float-right w-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className="fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br /> */}
                </div>
            </div>
        </main>
    );
}

export default DetailAlbumn;
