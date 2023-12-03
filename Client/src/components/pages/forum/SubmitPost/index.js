import { useState } from 'react';

import Fill from '../Fill';

import submitPostHandle from '~/services/api-handle/submitPostHandle';

function SubmitPost({ hideSumitPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <>
            <div className="fixed inset-0 z-20">
                <div className="container h-full flex justify-center items-center">
                    <div className="relative w-full md:w-[600px] p-5 bg-primary rounded">
                        <div
                            onClick={() => hideSumitPost()}
                            className="absolute flex items-center justify-center w-8 h-8 top-4 right-4 rounded-full bg-white/10 hover:bg-white/40"
                        >
                            <i className="text-xl  text-white opacity-70 fas fa-times"></i>
                        </div>
                        <input
                            value={title}
                            type="text"
                            className="w-full h-10 bg-transparent px-2 outline-none border-b-2 border-white my-5 focus:border-red-600"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div class="w-full my-5">
                            <div class="relative w-full min-w-[200px]">
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    class=" peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-t-white border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                ></textarea>
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Content
                                </label>
                            </div>
                        </div>
                        <button
                            onClick={() => submitPostHandle(title, content)}
                            className="w-full disabled:opacity-50 inline-block px-6 py-3 font-semibold tracking-wide bg-red-600 rounded"
                            disabled={!(title && content)}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Fill />
        </>
    );
}

export default SubmitPost;
