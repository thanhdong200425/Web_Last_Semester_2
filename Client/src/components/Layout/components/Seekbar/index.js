import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';

import SeekSlider from './components/SeekSlider';
import { SongContext } from '~/context/SongContext';

function Seekbar() {
    const {
        currentSongs,
        currentSongIndex,
        setCurrentSongI,
        setShuffleSongList,
        resetSongList,
    } = useContext(SongContext);
    const [play, setPlay] = useState('pause');
    const [suffleSongs, setSuffleSongs] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [heart, setHeart] = useState('');
    const [currentVolume, setCurrentVolume] = useState(0);
    const [volume, setVolume] = useState('mute');
    const audio = useRef();

    const handlePlay = (event) => {
        if (play === 'pause') {
            setPlay('play');
            audio.current.play();
        } else {
            setPlay('pause');
            audio.current.pause();
        }
    };

    const handleHeart = (event) => {
        if (heart === '') setHeart('clicked');
        else setHeart('');
    };

    const handleVolume = () => {
        if (volume === 'mute') {
            setVolume('unmute');
            setCurrentVolume(50);
        } else {
            setVolume('mute');
            setCurrentVolume(0);
        }
    };

    const forwardSongHandle = () => {
        if (currentSongIndex >= currentSongs.length - 1) {
            setCurrentSongI(0);
            return;
        }
        setCurrentSongI(+currentSongIndex + 1);
    };

    const backwardSongHandle = () => {
        if (currentSongIndex == 0) {
            setCurrentSongI(currentSongs.length - 1);
            return;
        }
        setCurrentSongI(+currentSongIndex - 1);
    };

    useEffect(() => {
        if (play === 'play') audio.current.play();
    }, [currentSongs, currentSongIndex]);

    useEffect(() => {
        if (+currentVolume === 0) setVolume('mute');
        else setVolume('unmute');
        audio.current.volume = +currentVolume / 100;
    }, [currentVolume]);

    return (
        <div className="container-fluid play_music pb-4">
            <audio
                onEnded={() => {
                    !repeat && forwardSongHandle();
                    repeat && audio.current.play();
                }}
                ref={audio}
                src={
                    (currentSongs.length > 0 &&
                        `/audios/${currentSongs[currentSongIndex]?.path}`) ||
                    '/audios/taivisao-mck.mp3'
                }
            ></audio>
            <div className="wrapper">
                <div className="left">
                    <div className="image_music">
                        <a href="">
                            <img
                                className="image_song"
                                src={
                                    currentSongs[currentSongIndex]?.song_photo &&
                                    '../img/albumn_99.jpg'
                                }
                                alt={
                                    currentSongs[currentSongIndex]?.song_name ||
                                    'song'
                                }
                                width="100%"
                            />
                        </a>
                    </div>
                    <div className="desc">
                        <div className="title">
                            <a href="">
                                {currentSongs[currentSongIndex]?.song_name ||
                                    "Song's name"}
                            </a>
                        </div>
                        <div className="singers">
                            <a href="">
                                {currentSongs[currentSongIndex]?.singers?.map(
                                    (singer) => singer.singer_name,
                                ) || "Singer's name"}
                            </a>
                        </div>
                    </div>
                    {/* <div className="heart">
                        <i
                            className={'bx bxs-heart ' + heart}
                            id="heart"
                            onClick={() => handleHeart()}
                        ></i>
                    </div> */}
                </div>
                <div className="mid">
                    <div className="controls">
                        <button
                            onClick={() => {
                                setSuffleSongs(!suffleSongs);
                                !suffleSongs && setShuffleSongList();
                                suffleSongs && resetSongList();
                            }}
                            className="shuffle"
                        >
                            {suffleSongs ? (
                                <i className="bx bx-shuffle text-blue-600"></i>
                            ) : (
                                <i className="bx bx-shuffle"></i>
                            )}
                        </button>
                        <button
                            onClick={backwardSongHandle}
                            className="skip_back"
                        >
                            <i className="bx bx-skip-previous"></i>
                        </button>
                        <button
                            className={'btn-play ' + play}
                            onClick={() => handlePlay()}
                        >
                            <span></span>
                            <span></span>
                        </button>
                        <button
                            onClick={forwardSongHandle}
                            className="skip_next"
                        >
                            <i className="bx bx-skip-next"></i>
                        </button>
                        <button
                            onClick={() => setRepeat(!repeat)}
                            className="reload"
                        >
                            {repeat ? (
                                <i className="bx bx-repost text-blue-600"></i>
                            ) : (
                                <i className="bx bx-repost"></i>
                            )}
                        </button>
                    </div>
                    {audio?.current?.currentTime >= 0 && (
                        <SeekSlider audio={audio} />
                    )}
                </div>
                <div className="right">
                    {/* <Link to="/detail_song" className="lyric">
                        <i className="bx bx-microphone"></i>
                    </Link> */}
                    <div className="volume_and_bar">
                        <div className="volume" onClick={() => handleVolume()}>
                            <i
                                className={'bx bxs-volume-full ' + volume}
                                id="iconVolume"
                            ></i>
                        </div>
                        <input
                            type="range"
                            value={currentVolume}
                            onChange={(e) => {
                                setCurrentVolume(e.target.value);
                            }}
                            className="volume_bar"
                            id="inputVolume"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seekbar;
