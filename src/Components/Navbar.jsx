import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        //  ------Navbar-----   
        <>
            <nav className="navbar navbar-expand-lg sticky-top ">
                <div className="container-fluid">
                     {/* ----logo---- */}
                    <a className="navbar-brand" href="/">
                        <img src='../assets/images/logo.png' className='img-fluid ps-3' alt='img_logo'/>
                    </a> 
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-around" id="navbarNav">
                        {/* ---- menu list---- */}
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink to={'/home'} className="nav-link text-white" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/ecosystem'} className="nav-link text-white">Ecosystem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} className="nav-link text-white" href="#">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/blog'} className={`nav-link text-white ${({isActive})=>isActive ? 'active':''}`} aria-disabled="true">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/token'} className="nav-link text-white" aria-disabled="true">Token</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/expo'} className="nav-link text-white" aria-disabled="true">Expo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/enhanced'} className="nav-link text-white" aria-disabled="true">Enhanced-Enterprise</NavLink>
                            </li>
                        </ul>
                         {/* -----button----- */}
                         <div className='hstack gap-3'>
                            <button className='btn btn-outline-light' type='button'>Whitepaper</button>
                            <button className='btn btn-warning contactButton' type='button'>Contact us</button>
                         </div>
                         {/* ----star logo----- */}
                         <div>
                         <a href='#'><img src='../assets/images/star.png' className='img-fluid' alt='star'/> </a>
                         </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
