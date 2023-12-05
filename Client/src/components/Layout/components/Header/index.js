import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';

function Header() {
    const navbar = useRef(null);
    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            if (scrolled) {
                navbar.current.className = 'scrolled';
            } else {
                navbar.current.className = '';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <><header ref={navbar} id="header-navbar">
            <div className="back_next ">
                <a href="">
                    <i className="bx bx-chevron-left bx-md"></i>
                </a>
                <a href="">
                    <i className="bx bx-chevron-right bx-md"></i>
                </a>
            </div>
            <div className="search">
                <form action="#" method="get">
                    <button type='submit'
                        id="searchIcon"
                        className="bx bx-search bx-sm text-[rgb(153,153,153)]"
                    ></button>
                    <input type="text" id="search" placeholder="Search" />
                </form>
            </div>
            <div className="user_profile">
                <div className="userName">Username</div>
                <div className="userImg">
                    <img src="" alt="" />
                    <i className="bx bxs-user-circle bx-md"></i>
                </div>
                <div className="opt">
                    <div className="dropdown">
                        <a
                            id="myDropdownToggle"
                            className="btn dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bx bx-chevron-down bx-md"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    My profile
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Logout
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>

    );
}

export default Header;
