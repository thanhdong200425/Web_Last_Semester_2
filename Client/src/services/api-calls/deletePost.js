const deletePost = (id) => {
    try {
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch('https://64527853bce0b0a0f747e24c.mockapi.io/api/post/' + id, option);
    } catch (error) {
        console.error('Error:', error);
    }
};
export default deletePost;
