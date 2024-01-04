export const addPlaylist = async (playlist_name) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
            body: JSON.stringify({ playlist_name }),
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist/add`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const removePlaylist = async (playlist_id) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist/${playlist_id}/remove`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const addSong = async ({ playlistId, songId }) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
            body: JSON.stringify({ song_id: songId }),
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist/${playlistId}/add_song`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const removeSong = async ({ playlistId, songId }) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
            body: JSON.stringify({ song_id: songId }),
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist/${playlistId}/remove_song`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getAllPlaylist = async () => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
            // body: JSON.stringify({ song_id: songId }),
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getPlaylist = async (playlist_id) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user')) || null;
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: user?.access_token,
            },
            // body: JSON.stringify({ song_id: songId }),
        };
        return fetch(
            `http://127.0.0.1:8000/api/${user?.id}/playlist/${playlist_id}`,
            option,
        ).then((response) => response.json());
    } catch (error) {
        console.error('Error:', error);
    }
};
