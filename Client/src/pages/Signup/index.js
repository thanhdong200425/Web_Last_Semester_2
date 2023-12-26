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
        <main className='main_login_signup'>
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
                                        type="text"
                                        minlength="4"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                    />
                                    <label>Tài khoản</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                    />
                                    <label>Email</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minlength="4"
                                        className="input-field"
                                        autocomplete="off"
                                        required
                                    />
                                    <label>Mật khẩu</label>
                                </div>

                                <input
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
