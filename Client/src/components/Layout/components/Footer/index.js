import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="container px-2 md:px-0 py-5 md:flex md:justify-between">
                <div className="text-center md:text-left md:flex md:gap-20">
                    <Link to='/' className="flex justify-center items-center text-3xl font-bold">
                        <span className='border border-red-600 rounded px-2'>fit</span>
                        <span className="text-red-500">HE</span>
                    </Link>
                    <div className="py-5 md:py-0">
                        <div>Email: linhnv.22ite@vku.udn.vn</div>
                        <div>Number phone: 0398426736</div>
                        <div>
                            Welcom to fitHe that is website support workout at
                            home.
                        </div>
                    </div>
                </div>
                <div className="flex justify-around md:block">
                    <a href="./">
                        <i className="fa-brands fa-facebook" />
                    </a>
                    <br />
                    <a href="./">
                        <i className="fa-brands fa-youtube" />
                    </a>
                    <br />
                    <a href="./">
                        <i className="fa-brands fa-tiktok" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
