import { useState, useEffect } from 'react';

function SeekSlider({ audio }) {
    const [currentTime, setCurrentTime] = useState(
        (audio.current.currentTime * 100) / audio.current?.duration || 0,
    );
    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentTime(
                    (audio.current.currentTime * 100) / audio.current.duration,
                ),
            1000,
        );
        return () => clearInterval(interval);
    }, []);

    const handleChange = (value) => {
        audio.current.currentTime = (value / 100) * audio.current.duration;
        setCurrentTime(
            (audio.current.currentTime * 100) / audio.current?.duration,
        );
    };

    let nowMinute = Math.floor(audio.current.currentTime / 60);
    let nowSecond = Math.floor(audio.current.currentTime - nowMinute * 60);
    let durationMinute = Math.floor(audio.current.duration / 60);
    let durationSecond = Math.floor(
        audio.current.duration - durationMinute * 60,
    );

    if (nowMinute < 10) nowMinute = '0' + nowMinute;
    if (nowSecond < 10) nowSecond = '0' + nowSecond;
    if (durationMinute < 10) durationMinute = '0' + durationMinute;
    if (durationSecond < 10) durationSecond = '0' + durationSecond;
    return (
        <div className="times">
            <span className="left_time">
                {nowMinute}:{nowSecond}
            </span>
            <input
                value={currentTime}
                onChange={(e) => handleChange(e.target.value)}
                type="range"
                className="seek_bar"
            />
            <span className="right_time">
                {durationMinute}:{durationSecond}
            </span>
        </div>
    );
}

export default SeekSlider;
