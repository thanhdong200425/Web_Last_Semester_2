import putPost from './putPost';

const postComment = (data, post) => {
    const fetchPost = async () => {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            fetch(
                'https://648f23c975a96b664444bedc.mockapi.io/api/comment',
                option,
            )
                .then((response) => response.json)
                .then(() => {
                    const data = {
                        id: post.id,
                        comment: Number(post.comment) + 1,
                    };
                    putPost(data);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchPost();
};
export default postComment;
