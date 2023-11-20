import postComment from '../api-calls/postComment';
import putPost from '../api-calls/putPost';

const postCommentHandle = (post, content) => {
    const data = {
        createdAt: new Date().toLocaleString(),
        username: localStorage.getItem('user_username'),
        avatar: localStorage.getItem('user_avatar'),
        content,
        idPost: post.id,
    };
    async function postCommentData() {
        console.log(data);
        postComment(data, post);
        console.log('put ', { comment: Number(post.comment) + 1 });
        
        // alert('Comment submitted successfully');
    }
    postCommentData();
};
export default postCommentHandle;
