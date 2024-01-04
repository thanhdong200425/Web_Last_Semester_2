export const getAlbumns = async () => {
    try {
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ username, password }),
        };
        return fetch('http://127.0.0.1:8000/api/albumn/', option).then(
            (response) => response.json(),
        );
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getAlbumn = async (albumn_id) => {
    try {
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return fetch(
            'http://127.0.0.1:8000/api/albumn/' + albumn_id,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const addSongToAlbumns = async () => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ song_id: 2 }),
        };
        return fetch(
            'http://127.0.0.1:8000/api/albumn/1/add_song',
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};
