import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            {/* <!-- place footer here --> */}
            <div className="contact">
                <div className="company">
                    <div className="title">
                        <h5>Company</h5>
                    </div>
                    <div className="subtitle">
                        <a href="">About</a>
                        <br />
                        <a href="">Jobs</a>
                        <br />
                        <a href="">For the Record</a>
                    </div>
                </div>
                <div className="communities">
                    <div className="title">
                        <h5>Communities</h5>
                    </div>
                    <div className="subtitle">
                        <a href="">For Artists</a>
                        <br />
                        <a href="">Developers</a>
                        <br />
                        <a href="">Advertising</a>
                        <br />
                        <a href="">Investors</a>
                        <br />
                        <a href="">For the Record</a>
                    </div>
                </div>
                <div className="useful">
                    <div className="title">
                        <h5>Useful link</h5>
                    </div>
                    <div className="subtitle">
                        <a href="">Support</a>
                        <br />
                        <a href="">Free Mobile App</a>
                        <br />
                    </div>
                </div>
            </div>
            <div className="social row">
                <div className="col-sm-4">
                    <a href="" className="twitter">
                        <i className="bx bxl-twitter bx-sm"></i>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href="" className="insta">
                        <i className="bx bxl-instagram-alt bx-sm"></i>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href="" className="facebook">
                        <i className="bx bxl-facebook-circle bx-sm"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
