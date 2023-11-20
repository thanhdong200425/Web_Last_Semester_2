import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import signupHandle from '~/services/api-handle/signupHandle';

function Signup() {
    const [isShowPw, setShowPw] = useState(false);
    const [isShowRePw, setShowRePw] = useState(false);
    const username = useRef(null);
    const pw = useRef(null);
    const repw = useRef(null);
    function handleLogin() {
        // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
        if (true) {
            // Nếu hợp lệ, chuyển hướng sang trang khác
            alert('đăng nhập thành công!');
            window.location.pathname = '/blog';
        } else {
            // Nếu không hợp lệ, hiển thị thông báo lỗi
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    }
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-full md:w-[600px] p-5 shadow md:shadow-white">
                <center>
                    <h1 className="m-0 font-bold text-red-600">Sign up</h1>
                </center>
                <div className="my-5">
                    <i className="far fa-user -mr-4" />
                    <input
                        ref={username}
                        type="text"
                        className="w-full h-10 bg-transparent px-8 outline-none border-b-2 border-white"
                        placeholder="Username"
                    />
                </div>
                <div className="relative my-5">
                    <i className="fas fa-key -mr-4" />
                    <input
                        ref={pw}
                        type={isShowPw ? 'text' : 'password'}
                        className="relative w-full h-10 bg-transparent px-8 outline-none border-b-2 border-white"
                        placeholder="Password"
                    />
                    <i
                        className={
                            (isShowPw ? 'fa-eye-slash' : 'fa-eye') +
                            ' far absolute right-1 top-4 cursor-pointer'
                        }
                        onClick={() => setShowPw(!isShowPw)}
                    />
                </div>
                <div className="relative my-5">
                    <i className="fas fa-key -mr-4" />
                    <input
                        ref={repw}
                        type={isShowRePw ? 'text' : 'password'}
                        className="relative w-full h-10 bg-transparent px-8 outline-none border-b-2 border-white"
                        placeholder="Enter password again"
                    />
                    <i
                        className={
                            (isShowRePw ? 'fa-eye-slash' : 'fa-eye') +
                            ' far absolute right-1 top-4 cursor-pointer'
                        }
                        onClick={() => setShowRePw(!isShowRePw)}
                    />
                </div>
                <div className="my-5">
                    Do you already have an account?{' '}
                    <Link to="/login" className="text-red-600 hover:underline">
                        Log in here.
                    </Link>
                </div>
                <Link to="/">
                    <button className="inline-block px-6 py-3 font-semibold tracking-wide border border-red-600 rounded">
                        Go back
                    </button>
                </Link>
                <button
                    onClick={() =>
                        signupHandle(
                            username.current.value,
                            pw.current.value,
                            repw.current.value,
                        )
                    }
                    className="float-right inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wide bg-red-600 rounded"
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Signup;
