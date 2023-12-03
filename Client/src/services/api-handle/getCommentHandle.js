import moment from 'moment/moment';

import getComment from '../api-calls/getComment';

function getCommentHandle(id) {
    const handle = async () => {
        let data = await getComment();
        data = data.filter((comment) => comment.idPost == id);
        data.sort((a, b) => {
            return (
                moment(b.createdAt, 'HH:mm:ss DD/MM/YYYY').valueOf() -
                moment(a.createdAt, 'HH:mm:ss DD/MM/YYYY').valueOf()
            );
        });
        console.log('Commet of post ' + id + ':', data);
        return data;
    };
    return handle();
}

export default getCommentHandle;
