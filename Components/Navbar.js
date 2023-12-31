import React, { useContext, useState }from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import ProgressContext from '../context/progress/ProgressContext'
const Navbar = () => {

    const progressContext = useContext(ProgressContext);
    const { progress, setProgress } = progressContext;

    const location = useLocation();
    <LoadingBar progress={progress} onLoaderFinished={() => { setProgress(0) }} />
    return (
        <>
            <LoadingBar progress={progress} onLoaderFinished={() => { setProgress(0) }} />
            <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid" style={{ position: 'fixed', zIndex: 1000 }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} aria-current="page" to="/profile">Profile</Link>
                            </li>
                        </ul>
                        <Link className="navbar-brand" to="/home">TrendifyMart</Link>

                        <div>
                            <Link to='/profile' className="bg-info profile-link ml-2">
                                <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
