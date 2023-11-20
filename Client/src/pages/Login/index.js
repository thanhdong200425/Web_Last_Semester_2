import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '~/components/Layout/components/Loading';

import loginHandle from '~/services/api-handle/loginHandle';

function Login() {
    const [isShowPw, setShowPw] = useState(false);
    const username = useRef(null);
    const pw = useRef(null);

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-full md:w-[600px] p-5 shadow md:shadow-white">
                <center>
                    <h1 className="m-0 font-bold text-red-600">Log in</h1>
                </center>
                <div className="my-5">
                    <i className="far fa-user -mr-4" />
                    <input
                        ref={username}
                        type="text"
                        className="w-full h-10 bg-transparent px-8 outline-none border-b-2 border-white"
                        placeholder="Username"
                        id="us"
                    />
                </div>
                <div className="relative my-5">
                    <i className="fas fa-key -mr-4" />
                    <input
                        ref={pw}
                        type={isShowPw ? 'text' : 'password'}
                        className="relative w-full h-10 bg-transparent px-8 outline-none border-b-2 border-white"
                        placeholder="Password"
                        id="us"
                    />
                    <i
                        className={
                            (isShowPw ? 'fa-eye-slash' : 'fa-eye') +
                            ' far absolute right-1 top-4 cursor-pointer'
                        }
                        onClick={() => setShowPw(!isShowPw)}
                    />
                </div>
                <Link to="/" className="text-red-600 hover:underline">
                    Forgot password?
                </Link>
                <div className="my-5">
                    You don't have an account yet?{' '}
                    <Link to="/signup" className="text-red-600 hover:underline">
                        Sign up now.
                    </Link>
                </div>
                <Link to="/">
                    <button className="inline-block px-6 py-3 font-semibold tracking-wide border border-red-600 rounded">
                        Go back
                    </button>
                </Link>
                <button
                    onClick={() => {
                        loginHandle(username.current.value, pw.current.value);
                    }}
                    className="float-right inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wide bg-red-600 rounded"
                >
                    Log in
                </button>
            </div>
        </div>
    );
}

export default Login;
