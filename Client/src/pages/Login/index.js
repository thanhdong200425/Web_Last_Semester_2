import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authApi from '~/apis/auth.api';

function Login() {
    const username = useRef(null);
    const password = useRef(null);
    const handleLogin = async () => {
        const data = await authApi.login({
            username: username.current.value,
            password: password.current.value,
        });
        console.log(data);
        data.success && toast.success(data.message);
        !data.success && toast.error(data.message);
    };

    return (
        <main className='main_login_signup'>
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form autocomplete="off" className="sign-in-form form_login_signup">
                            <div className="logo">
                                <img src="../img/JoySongpng.png" />
                            </div>

                            <div className="heading">
                                <h2>Xin chào !</h2>
                                <h6>Bạn mới tham gia JoySong?</h6>
                                <a href="/signup" className="toggle">
                                    Đăng ký ngay
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
                                        placeholder="Tài khoản"
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
                                        placeholder="Mật khẩu"
                                    />
                                </div>

                                <input
                                    onClick={handleLogin}
                                    value="Đăng nhập"
                                    className="sign-btn text-center"
                                />

                                <p className="text">
                                    Bạn đã quên mật khẩu ?
                                    <a href="#">Trợ giúp</a>
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

export default Login;
