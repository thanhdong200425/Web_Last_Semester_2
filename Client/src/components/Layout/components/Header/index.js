import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import logoutHandle from '~/services/api-handle/logoutHandle';

function Header() {
    let path = useLocation().pathname;

    const [isMenu, setIsMenu] = useState(true);
    const navhandle = () => {
        let menu = document.querySelector('.menu-icon');
        let close = document.querySelector('.close-icon');
        let nav = document.querySelector('nav');
        if (isMenu) {
            menu.classList.add('hidden');
            nav.classList.remove('hidden');
            close.classList.remove('hidden');
        } else {
            menu.classList.remove('hidden');
            nav.classList.add('hidden');
            close.classList.add('hidden');
        }
        setIsMenu(!isMenu);
    };

    return (
        <header>
            <div className="back_next ">
                <a href="">
                    <i className="bx bx-chevron-left bx-md"></i>
                </a>
                <a href="">
                    <i className="bx bx-chevron-right bx-md"></i>
                </a>
            </div>
            <div className="search w-[70%]">
                <i
                    id="searchIcon"
                    className="bx bx-search bx-sm text-[rgb(153,153,153)]"
                ></i>
                <form action="#" method="get">
                    <input type="text" id="search" placeholder="Search" />
                </form>
            </div>
            <div className="user_profile w-1/5">
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
    );
}

export default Header;
