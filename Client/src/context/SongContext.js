import { createContext, useState } from 'react';

const SongContext = createContext();

// const data = [
//     { path: 'Di-De-Tro-Ve-Soobin-Hoang-Son.mp3' },
//     { path: 'taivisao-mck.mp3' },
//     { path: 'taivisao-mck.mp3' },
// ];

const SongContextProvider = ({ children }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(
        JSON.parse(sessionStorage.getItem('currentSongIndex')) || 0,
    );
    const [currentSongs, setCurrentSongs] = useState(
        JSON.parse(sessionStorage.getItem('currentSongs')) || [],
    );
    const setCurrentSongList = (songs, index = 0) => {
        sessionStorage.setItem('currentSongs', JSON.stringify(songs));
        sessionStorage.setItem('currentSongIndex', JSON.stringify(index));
        setCurrentSongs(songs);
        setCurrentSongIndex(index);
    };
    const setShuffleSongList = () => {
        const shuffleSongs = [...currentSongs].sort(() => Math.random() - 0.5);
        setCurrentSongs(shuffleSongs);
        const index = shuffleSongs.findIndex(
            (song) => song.path === currentSongs[currentSongIndex].path,
        );
        setCurrentSongIndex(index);
    };
    const resetSongList = () => {
        const songs = JSON.parse(sessionStorage.getItem('currentSongs')) || [];
        setCurrentSongs(songs);
        const index = songs.findIndex(
            (song) => song.path === currentSongs[currentSongIndex].path,
        );
        setCurrentSongIndex(index);
    };
    const setCurrentSongI = (index) => {
        setCurrentSongIndex(index);
    };
    return (
        <SongContext.Provider
            value={{
                currentSongs,
                setCurrentSongList,
                currentSongIndex,
                setCurrentSongI,
                setShuffleSongList,
                resetSongList,
            }}
        >
            {children}
        </SongContext.Provider>
    );
};

export { SongContext, SongContextProvider };
