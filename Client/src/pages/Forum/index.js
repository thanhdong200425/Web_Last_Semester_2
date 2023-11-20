import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

import SubmitPost from '~/components/pages/forum/SubmitPost';
import getPostList from '~/services/api-calls/getPostList';

function Forum() {
    const [showSumitPost, setShowSumitPost] = useState(false);
    const [posts, setPosts] = useState([]);
    const handleHideSumitPost = () => {
        setShowSumitPost(false);
    };
    useEffect(() => {
        async function fetchData() {
            const data = await getPostList();
            data.sort((a, b) => {
                return (
                    moment(b.createdAt, 'HH:mm:ss DD/MM/YYYY').valueOf() -
                    moment(a.createdAt, 'HH:mm:ss DD/MM/YYYY').valueOf()
                );
            });
            setPosts(data);
        }
        fetchData();
    }, []);
    return (
        <div className="container min-h-[450px]">
            {localStorage.getItem('assessToken') ? (
                <>
                    {showSumitPost && (
                        <SubmitPost hideSumitPost={handleHideSumitPost} />
                    )}
                    <button
                        onClick={() => setShowSumitPost(true)}
                        className="mb-5 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white border border-red-600 rounded-lg h-[60px] w-48 bg-red-600"
                    >
                        Submit post
                    </button>
                    {posts.length > 0 ? (
                        posts.map((post) => {
                            return (
                                <div
                                    key={post.id}
                                    className="border-b border-red-600 pb-5 mt-5"
                                >
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
                                        <Link to={'/post/' + post.id}>
                                            <h1 className="py-0">
                                                {post.title}
                                            </h1>
                                            <div className="flex items-center gap-2">
                                                <p>
                                                    <span className="text-red-600">
                                                        Time:
                                                    </span>
                                                    {' ' + post.createdAt}
                                                </p>
                                                <p>
                                                    <span className="text-red-600">
                                                        Like:
                                                    </span>
                                                    {' ' + post.like}
                                                </p>
                                                <p>
                                                    <span className="text-red-600">
                                                        Comment:{' '}
                                                    </span>
                                                    {post.comment}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="mt-5 text-center">No data</div>
                    )}
                </>
            ) : (
                <div className="flex justify-center items-center w-full h-[450px]">
                    <Link to="/login">
                        <h1 className="py-2 px-4 border border-red-600 rounded">
                            Log in
                        </h1>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Forum;
