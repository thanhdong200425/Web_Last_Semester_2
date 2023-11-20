import postPost from '../api-calls/postPost';

const submitPostHandle = (title, content, like = 0) => {
    const data = {
        createdAt: new Date().toLocaleString(),
        username: localStorage.getItem('user_username'),
        avatar: localStorage.getItem('user_avatar'),
        title,
        content,
        like,
        comment: 0,
    };
    async function postPostData() {
        console.log(data);
        postPost(data);
        alert('Post submitted successfully');
        window.location.reload();
    }
    postPostData();
};
export default submitPostHandle;
