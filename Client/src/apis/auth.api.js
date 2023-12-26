export const login = async ({ username, password }) => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        };
        return fetch('http://127.0.0.1:8000/api/', option).then(
            (response) => response.json(),
        );
    } catch (error) {
        console.error('Error:', error);
    }
};
