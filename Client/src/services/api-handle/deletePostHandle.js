import deleteComment from '../api-calls/deleteComment';
import deletePost from '../api-calls/deletePost';

const deletePostHandle = (id, idComments) => {
    async function fetchDetele() {
        deletePost(id);
        idComments.forEach(async (id) => deleteComment(id));
        alert('Deleted successful');
        window.location.pathname = '/forum';
    }
    fetchDetele();
};
export default deletePostHandle;
