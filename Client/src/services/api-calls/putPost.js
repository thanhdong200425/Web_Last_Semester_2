const putPost = (data) => {
    const fetchPut = async () => {
        try {
            const option = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            await fetch(
                'https://64527853bce0b0a0f747e24c.mockapi.io/api/post/' +
                    data.id,
                option,
            )
                .then((response) => response.json)
                .then(() => window.location.reload());
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchPut();
};
export default putPost;
