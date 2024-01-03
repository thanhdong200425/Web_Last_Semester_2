import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authApi from '~/apis/auth.api';
import { AuthContext } from '~/context/AuthContext';

function Login() {
    const username = useRef(null);
    const password = useRef(null);
    const { loginContextHandle } = useContext(AuthContext);
    const handleLogin = async () => {
        const regex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
        if (!regex.test(password.current.value)) {
            toast.error(
                'Mật khẩu phải bao gồm tối thiểu ít nhất 1 chữ cái viết hoa, 1 ký tự đặc biệt và 1 số!',
            );
            return;
        }

        const request = await authApi
            .login({
                username: username.current.value,
                password: password.current.value,
            })
            .then((data) => {
                data.status && toast.success('Đăng nhập thành công!');
                data.status && loginContextHandle(data.data);
                !data.status && toast.error('Tài khoản hoặc mật khẩu sai!');
                return data;
            })
            .then((data) => {
                if (data.status) window.location.pathname = '/';
            })
            .catch((error) => console.log(error));
    };
    return (
        <main className="main_login_signup">
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form
                            autoComplete="off"
                            className="sign-in-form form_login_signup"
                        >
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
