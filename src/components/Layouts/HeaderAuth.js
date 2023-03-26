import React from 'react';
import mainLogo from 'theme/assets/img/logo/logo.png';
import whiteLogo from 'theme/assets/img/logo/white-logo.png';
import {NavLink} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HeaderAuth = ({transparent, user }) => (
    <header className={`header ${transparent ? 'header--transparent' : ''}`}>
        <div className="container">
            <div className="header__main">
                <div className="header__col header__col--left">
                    <div className="header__element header__element--author-btn">
                        <button className="hamburger js-toolbar-btn" data-target="#author-offcanvas"
                                type="button" aria-label="">
                            <span></span>
                        </button>
                    </div>
                    <div className="header__element header__element--logo">
                        <div className="logo">
                                <NavLink
                                    to="/"
                                    className="d-block"
                                >
                                <img src={mainLogo} alt="Logo" className="logo--dark"/>
                                <img src={whiteLogo} alt="Logo" className="logo--white"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="header__col header__col--center">
                    <nav className="header__element d-none d-lg-block">
                        <ul className="mainmenu">
                            {user ?
                                <>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/dashboard"
                                            className="mainmenu__link"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/about"
                                            className="mainmenu__link"
                                        >
                                            About Me
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/membership"
                                            className="mainmenu__link"
                                        >
                                            Membership
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/stories"
                                            className="mainmenu__link"
                                        >
                                            Stories
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/Videos"
                                            className="mainmenu__link"
                                        >
                                            Videos
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/galleries"
                                            className="mainmenu__link"
                                        >
                                            Galleries
                                        </NavLink>
                                    </li>
                                    <li className="mainmenu__item">
                                        <NavLink
                                            to="/dashboard"
                                            className="mainmenu__link"
                                        >
                                            LiveChat
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                <li className="mainmenu__item">
                                    <NavLink
                                        to="/login"
                                        className="mainmenu__link"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li className="mainmenu__item">
                                    <NavLink
                                        to="/register"
                                        className="mainmenu__link"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
                <div className="header__col header__col--right">
                    <div className="header__element d-none d-lg-block">
                        <div className="social social--white social--space-23">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                               className="social__link" aria-label="Facebook account link">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                               className="social__link" aria-label="Facebook account link">
                                <i data-feather="twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="header__element header__element--mobile-btn d-block d-lg-none">
                        <button className="hamburger js-toolbar-btn" data-target="#mobile-offcanvas"
                                type="button" aria-label="">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default HeaderAuth;
