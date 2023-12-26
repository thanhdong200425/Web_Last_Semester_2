import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Seekbar() {
    const [play, setPlay] = useState('pause');
    const [heart, setHeart] = useState('');
    const [currentVolume, setCurrentVolume] = useState(0);
    const [volume, setVolume] = useState('mute');
    const audio = useRef();
    const seakSlider = useRef();

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

    useEffect(()=>{
        const interval = setInterval(()=> {}, 1000)
        return clearInterval(interval);
    },[])

    return (
        <div className="container-fluid play_music">
            <audio ref={audio} src="./audios/taivisao-mck.mp3"></audio>
            <div className="wrapper">
                <div className="left">
                    <div className="image_music">
                        <a href="">
                            <img
                                className="image_song"
                                src="../img/albumn_99.jpg"
                                alt=""
                                width="100%"
                            />
                        </a>
                    </div>
                    <div className="desc">
                        <div className="title">
                            <a href="">Tại Vì Sao</a>
                        </div>
                        <div className="singers">
                            <a href="">RPT MCK</a>
                        </div>
                    </div>
                    <div className="heart">
                        <i
                            className={'bx bxs-heart ' + heart}
                            id="heart"
                            onClick={() => handleHeart()}
                        ></i>
                    </div>
                </div>
                <div className="mid">
                    <div className="controls">
                        <button className="shuffle">
                            <i className="bx bx-shuffle"></i>
                        </button>
                        <button className="skip_back">
                            <i className="bx bx-skip-previous"></i>
                        </button>
                        <button
                            className={'btn-play ' + play}
                            onClick={() => handlePlay()}
                        >
                            <span></span>
                            <span></span>
                        </button>
                        <button className="skip_next">
                            <i className="bx bx-skip-next"></i>
                        </button>
                        <button className="reload">
                            <i className="bx bx-repost"></i>
                        </button>
                    </div>
                    <div className="times">
                        <span className="left_time"></span>
                        <input ref={seakSlider} type="range" className="seek_bar" />
                        <span className="right_time"></span>
                    </div>
                </div>
                <div className="right">
                    <div className="lyric">
                        <i className="bx bx-microphone"></i>
                    </div>
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
                            onChange={(e) => setCurrentVolume(e.target.value)}
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
