import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            {/* <!-- ========== Menu ========== --> */}
            <header  id="site_menu_header"  className="site-header">
                <div className="main-logo">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}   className="custom-logo-link main-brand effect-ajax"  
                        aria-current="page">
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-light" alt="" />
                        <img src="/assets/img/logo-light4.png" className="custom-logo logo-dark" alt="" />
                    </a>
                </div>
                <nav className="main-navigation ">
                    <div className="menu-cover-title header-container dsn-container">MENU</div>
                    <ul id="dsn-primary-list" className="primary-nav h2">
                        <li className="nav-item has-sub-menu">
                            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
                                <span className="overflow">Home</span>
                            </a>
                        </li>

                        <li className="nav-item has-sub-menu">
                            <a href="/blog" onClick={(e) => { e.preventDefault(); window.location.href = '/blog'; }}>
                                <span className="overflow">Blogs</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/about" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>
                                <span className="overflow">About</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>
                                <span className="overflow">Contact</span>
                            </a>
                        </li>
                    </ul>


                    <div className="container-content  d-flex flex-column justify-content-center section-margin">
                        <div className="nav__info">
                            <div className="nav-content">
                                <h5 className="sm-title-block mb-10">Studio</h5>
                                26-30 New Damietta
                                El-Mahalla El-Kubra, SK1 66LM

                            </div>
                            <div className="nav-content mt-30">
                                <h5 className="sm-title-block mb-10">Contact</h5>
                                <p className="links over-hidden mb-1">
                                    <a className="link-hover d-block" href="tel:00201004392260"
                                        data-hover-text="+00 (2)012 3321">+00
                                        (2)01004392260</a>
                                    <a className="link-hover" href="tel:00201024552406" data-hover-text="+00 (2)012 3321">+00
                                        (2)01024552406</a>
                                </p>
                                <p className="links over-hidden"><a className="link-hover" href="mailto:info@dsngrid.com"
                                    data-hover-text="info@dsngrid.com">info@dsngrid.com</a></p>

                            </div>
                        </div>
                        <div className="nav-social nav-content mt-30">
                            <div className="nav-social-inner p-relative">
                                <h5 className="sm-title-block mb-10">Follow us</h5>
                                <ul style={{ "--dsn-li-name": "dsn6;" }}>
                                    <li style={{ "--dsn-li-index": 0 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Dribbble.</a></li>
                                    <li style={{ "--dsn-li-index": 1 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Behance.</a></li>
                                    <li style={{ "--dsn-li-index": 2 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Linkedin.</a></li>
                                    <li style={{ "--dsn-li-index": 3 }}><a href="#0" target="_blank"
                                        rel="nofollow noopener noreferrer">Twitter.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="navbar_toggle" className="navbar-toggle">
                    <div className="toggle-icon">
                        <div className="toggle-line"></div>
                        <div className="toggle-line"></div>
                        <div className="toggle-line"></div>
                    </div>
                    <div className="toggle-text">
                        <div className="text-menu">Menu</div>
                        <div className="text-open">Open</div>
                        <div className="text-close">Close</div>
                    </div>
                </div>
                <div className="bg-load background-main"></div>

                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
                    className="bg-load dsn-svg-transition">
                    <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                </svg>

            </header>
            {/* <!-- ========== End Menu ========== --> */}
        </>
    )
}

export default Navbar