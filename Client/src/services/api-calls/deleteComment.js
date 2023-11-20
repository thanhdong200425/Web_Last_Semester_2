import putPost from './putPost';

const deleteComment = (id, post) => {
    const fetchDelete = async () => {
        try {
            const option = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch(
                'https://648f23c975a96b664444bedc.mockapi.io/api/comment/' + id,
                option,
            )
                .then((response) => response.json)
                .then(() => {
                    const data = {
                        id: post.id,
                        comment: Number(post.comment) - 1,
                    };
                    putPost(data);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchDelete();
};
export default deleteComment;
