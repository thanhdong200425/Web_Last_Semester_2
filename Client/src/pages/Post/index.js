import { useEffect, useState, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import deleteComment from '~/services/api-calls/deleteComment';
import getPost from '~/services/api-calls/getPost';
import deletePostHandle from '~/services/api-handle/deletePostHandle';
import getCommentHandle from '~/services/api-handle/getCommentHandle';
import postCommentHandle from '~/services/api-handle/postCommentHandle';

function Post() {
    const id = useParams().id;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [cmt, setCmt] = useState('');
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLike, setLike] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPost(id);
            setPost(data);
        };
        const fetchComments = async () => {
            const data = await getCommentHandle(id);
            setComments(data);
        };
        fetchPost();
        fetchComments();
    }, [id, isLike]);
    useLayoutEffect(() => {
        const fetchComments = async () => {
            const data = await getCommentHandle(id);
            setComments(data);
        };
        fetchComments();
    }, [id]);
    console.log(post);
    const deleteCommentBtn = (id) => {
        const fetchDelete = async () => {
            deleteComment(id, post);
        };
        fetchDelete();
    };
    const handleLike = () => {
        const data = {
            id: id,
            like: isLike ? Number(post.like) - 1 : Number(post.like) + 1,
        };
        try {
            const option = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            fetch(
                'https://64527853bce0b0a0f747e24c.mockapi.io/api/post/' +
                    data.id,
                option,
            )
                .then((response) => response.json)
                .then(() => setLike(!isLike));
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="container min-h-[450px]">
            {showConfirm && (
                <>
                    <div className="fixed inset-0 z-20">
                        <div className="container h-full flex justify-center items-center">
                            <div className="relative w-full md:w-[600px] p-5 bg-primary rounded">
                                <p>Do you want delele?</p>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 bg-black/50 z-10"></div>
                </>
            )}
            {post !== null ? (
                <>
                    <div className="border-b border-red-600 pb-5 mt-5">
                        <div>
                            <div className="flex items-center gap-2">
                                <img
                                    src={post.avatar}
                                    class="w-10 h-10 rounded-full"
                                    alt="Avatar"
                                />
                                <span className="text-base">
                                    {post.username}
                                </span>
                            </div>
                            <div>
                                <h1 className="mb-5 py-0">{post.title}</h1>
                                <p className="my-5">{post.content}</p>
                                <div className="flex items-center gap-2 select-none">
                                    <p>
                                        <span className="text-red-600">
                                            Time:
                                        </span>
                                        {' ' + post.createdAt}
                                    </p>
                                    <p>
                                        <span
                                            onClick={handleLike}
                                            className={
                                                'cursor-pointer ' +
                                                (isLike && 'text-red-600')
                                            }
                                        >
                                            <i className="fa-solid fa-heart"></i>
                                        </span>
                                        {' ' + post.like}
                                    </p>
                                    <p>
                                        <span className="text-red-600">
                                            Comments:{' '}
                                        </span>
                                        {comments.length}
                                    </p>
                                    {localStorage.getItem('user_username') ===
                                        post.username && (
                                        <>
                                            <p
                                                onClick={() =>
                                                    deletePostHandle(
                                                        id,
                                                        comments.map(
                                                            (comment) =>
                                                                comment.id,
                                                        ),
                                                    )
                                                }
                                                className="cursor-pointer"
                                            >
                                                <span className="text-red-600">
                                                    Delete
                                                </span>
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="w-full my-5">
                            <div class="relative w-full min-w-[200px]">
                                <textarea
                                    value={cmt}
                                    onChange={(e) => setCmt(e.target.value)}
                                    class=" peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-t-white border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                ></textarea>
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Comment
                                </label>
                            </div>
                        </div>
                        <button
                            onClick={() => postCommentHandle(post, cmt)}
                            className="my-5 w-full disabled:opacity-50 inline-block px-6 py-3 font-semibold tracking-wide bg-red-600 rounded"
                            disabled={!cmt}
                        >
                            Submit
                        </button>
                        {comments && comments.length > 0 ? (
                            <>
                                {comments.map((comment) => {
                                    return (
                                        <div
                                            key={comment.id}
                                            className="border-b border-red-600 pb-5 mt-5"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={comment.avatar}
                                                        class="w-10 h-10 rounded-full"
                                                        alt="Avatar"
                                                    />
                                                    <span className="text-base">
                                                        {comment.username}
                                                    </span>
                                                </div>
                                                <h1 className="mb-5 py-0">
                                                    {comment.title}
                                                </h1>
                                                <p className="my-5">
                                                    {comment.content}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p>
                                                        <span className="text-red-600">
                                                            Time:
                                                        </span>
                                                        {' ' +
                                                            comment.createdAt}
                                                    </p>
                                                    {localStorage.getItem(
                                                        'user_username',
                                                    ) === comment.username && (
                                                        <>
                                                            <p
                                                                onClick={() =>
                                                                    deleteCommentBtn(
                                                                        comment.id,
                                                                    )
                                                                }
                                                                className="cursor-pointer"
                                                            >
                                                                <span className="text-red-600">
                                                                    Delete
                                                                </span>
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <div className="mt-5 text-center">
                                Don't have comment yet
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="mt-5 text-center">No data</div>
            )}
        </div>
    );
}

export default Post;
