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
        <header className="container mx-auto text-xl px-2 py-5 md:px-0 md:flex md:justify-between md:items-center">
            <div className="flex justify-between text-center">
                <Link to="/" className="flex items-center text-3xl font-bold">
                    <span className="border border-red-600 rounded px-2">
                        fit
                    </span>
                    <span className="text-red-600">HE</span>
                </Link>
                <div onClick={navhandle} className="menu-icon md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
                <div
                    onClick={navhandle}
                    className="close-icon hidden md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
            <nav className="text-center mt-5 hidden md:block md:mt-0">
                <ul className="block md:flex md:items-center md:gap-5">
                    <li className="my-1">
                        <Link
                            className={
                                'hover:border-b-2  border-white ' +
                                (path === '/' ? 'border-b-2' : '')
                            }
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link
                            className={
                                'hover:border-b-2  border-white ' +
                                (path.includes('/training') ? 'border-b-2' : '')
                            }
                            to="/training"
                        >
                            Training
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link
                            className={
                                'hover:border-b-2  border-white ' +
                                (path.includes('/forum') ? 'border-b-2' : '')
                            }
                            to="/forum"
                        >
                            Forum
                        </Link>
                    </li>
                    <li>
                        {localStorage.getItem('assessToken') ? (
                            <div className='flex justify-center items-center gap-3'>
                                <img
                                    src={localStorage.getItem('user_avatar')}
                                    class="w-10 rounded-full"
                                    alt="Avatar"
                                />
                                <div className='cursor-pointer' onClick={logoutHandle}>Logout</div>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="flex justify-center items-center gap-3"
                            >
                                <i className="fa-solid fa-user"></i>
                                <span>Log In</span>
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
