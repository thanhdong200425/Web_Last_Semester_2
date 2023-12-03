const postUser = (data) => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        fetch(
            'https://64527853bce0b0a0f747e24c.mockapi.io/api/account',
            option,
        );
    } catch (error) {
        console.error('Error:', error);
    }
};
export default postUser;
