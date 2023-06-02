import React from "react";
import {Link, NavLink} from 'react-router-dom';
import DarkLogo from 'front/img/dark-logo.png';
import LightLogo from 'front/img/white-logo.png';
import {useAuth} from 'hooks/auth';
import styles from 'front/assets/css/header.module.scss';

const Header = ({user}) => {
    const {logout} = useAuth();
    return (
        <header className="header fixed-top" id="fronHeader">
            <div className="header-main navbar-expand-xl">
                <div className="container-fluid">
                    <div className="header-main">

                        <div className="site-branding">
                            <Link to="/" className="dark-logo">
                                <img src={DarkLogo} alt/>
                            </Link>
                            <Link to="/" className="light-logo">
                                <img src={LightLogo} alt/>
                            </Link>
                        </div>

                        <div className="main-menu header-navbar">
                            <nav className="navbar">

                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ">

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/live">
                                                Live Chat
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/galleries">
                                                Galleries
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/videos">
                                                Videos
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/stories">
                                                Stories
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/plans">
                                                Upgrade
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>

                        <div className="header-action-items">

                            {user ? (
                                <div className="search-icon">
                                    <Link to={'/profile'}>
                                        <i className="fas fa-user-alt"></i>
                                    </Link>
                                    <Link to={'/admin/dashboard'}>
                                        <i className="fas fa-tachometer-alt"></i>
                                    </Link>
                                    <a href="front/components/Layouts/front/Header#" onClick={logout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </a>
                                </div>
                            ) : null}

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
