import React, { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { getData } from '../functions';

// <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

export default function Home() {

    const nav = useNavigate();

    useEffect(() => {
        const home = async () => {
            const response = await getData("/");
            if (!response.state) {
                nav("/login");
            }
        };
        home();
    });

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        Authentication Demo
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/patchnotes'}>
                                    Patch Notes
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/forum'}>
                                    Forum
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/profile'}>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/logout'}>
                                    Exit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Welcome</h3>

                    </form>
                </div>
            </div>
        </div>
    )
}
