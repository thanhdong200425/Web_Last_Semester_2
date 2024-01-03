import { createContext, useState } from 'react';

const SongContext = createContext();

const data = [
    { path: 'Di-De-Tro-Ve-Soobin-Hoang-Son.mp3' },
    { path: 'taivisao-mck.mp3' },
    { path: 'taivisao-mck.mp3' },
];

const SongContextProvider = ({ children }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(
        JSON.parse(sessionStorage.getItem('currentSongIndex')) || 0,
    );
    const [currentSongs, setCurrentSongs] = useState(
        JSON.parse(sessionStorage.getItem('currentSongs')) || [],
    );
    const setCurrentSongList = (songs, index = 0) => {
        sessionStorage.setItem('currentSongs', JSON.stringify(data));
        sessionStorage.setItem('currentSongIndex', JSON.stringify(index));
        setCurrentSongs(data);
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
            }}
        >
            {children}
        </SongContext.Provider>
    );
};

export { SongContext, SongContextProvider };
