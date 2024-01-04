import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authApi from '~/apis/auth.api';

function Signup() {
    const [isShowPw, setShowPw] = useState(false);
    const [isShowRePw, setShowRePw] = useState(false);
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleSignup = async () => {
        // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
        const regex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
        if (!regex.test(password.current.value)) {
            toast.error(
                'Mật khẩu phải bao gồm tối thiểu ít nhất 1 chữ cái viết hoa, 1 ký tự đặc biệt và 1 số!',
            );
            return;
        }
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexEmail.test(email.current.value)) {
            toast.error('Email không hợp lệ!');
            return;
        }
        const data = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        const request = await authApi
            .signup(data)
            .then((data) => {
                data.status && toast.success('Đăng ký thành công!');
                !data.status && toast.error('Không thể đăng ký!');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Email or usename is used');
            });
    };
    return (
        <main className="main_login_signup">
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form
                            action="index.html"
                            autocomplete="off"
                            className="sign-up-form form_login_signup"
                        >
                            <div className="logo">
                                <img src="../img/JoySongpng.png" />
                            </div>

                            <div className="heading">
                                <h2>Sự bắt đầu mới</h2>
                                <h6>Bạn đã có tài khoản?</h6>
                                <a href="/login" className="toggle">
                                    Đăng nhập ngay
                                </a>
                                <br />
                                <br />
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        ref={username}
                                        type="text"
                                        minlength="4"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                        placeholder={'Username'}
                                    />
                                </div>

                                <div className="input-wrap">
                                    <input
                                        ref={email}
                                        type="email"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                        placeholder={'Email'}
                                    />
                                </div>

                                <div className="input-wrap">
                                    <input
                                        ref={password}
                                        type="password"
                                        minlength="4"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                        placeholder={'Password'}
                                    />
                                </div>

                                <input
                                    onClick={handleSignup}
                                    value="Đăng ký"
                                    className="sign-btn text-center"
                                />

                                <p className="text">
                                    Bằng cách đăng ký, tôi đồng ý với
                                    <a href="#">Điều khoản dịch vụ </a> và
                                    <a href="#">Chính sách bảo mật</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="carousel">
                        <div className="images-wrapper">
                            <img
                                src="../img/image1.png"
                                className="image_login_signup image img-1 show"
                                alt=""
                            />
                            <img
                                src="../img/image2.png"
                                className="image_login_signup image img-2"
                                alt=""
                            />
                            <img
                                src="../img/image3.png"
                                className="image_login_signup image img-3"
                                alt=""
                            />
                        </div>

                        <div className="text-slider">
                            <div className="text-wrap">
                                <div className="text-group">
                                    <h2>Nghe nhạc mọi lúc mọi nơi</h2>
                                    <h2>Tạo danh sách phát của riêng bạn</h2>
                                    <h2>Nghe nhạc không sợ quảng cáo</h2>
                                </div>
                            </div>

                            <div className="bullets">
                                <span className="active" data-value="1"></span>
                                <span data-value="2"></span>
                                <span data-value="3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup;
