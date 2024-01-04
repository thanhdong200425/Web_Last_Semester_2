export const getSongs = async () => {
    try {
        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ username, password }),
        };
        return fetch('http://127.0.0.1:8000/api/songs/', option).then(
            (response) => response.json(),
        );
    } catch (error) {
        console.error('Error:', error);
    }
};