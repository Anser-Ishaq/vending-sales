import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* <!-- ========== Menu ========== --> */}
            <header id="site_menu_header" className="site-header">
                <div className="main-logo">
                    <a href="index.html" data-dsn-text="GRASS" className="custom-logo-link main-brand effect-ajax" rel="home"
                        aria-current="page">
                        <img src="/assets/img/logo-light3.png" className="custom-logo logo-light" alt="" />
                        <img src="/assets/img/logo.png" className="custom-logo logo-dark" alt="" />
                    </a>
                </div>
                <nav className="main-navigation ">
                    <div className="menu-cover-title header-container dsn-container">MENU</div>
                    <ul id="dsn-primary-list" className="primary-nav h2">
                        <li className="nav-item has-sub-menu">
                            <a title="Home" href="#0">
                                <span className="overflow ">Home</span>
                            </a>
                            {/* <ul className="nav-item">
                                <li className="dsn-back">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                            viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                            <g>
                                                <path
                                                    d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z" />
                                            </g>
                                        </svg>
                                        <span className="text-toggle-back">
                                            <span className="text-name">Home</span>
                                            <span className="text-back">Back</span>
                                        </span>
                                    </span>
                                </li>
                                <li className="nav-item ">
                                    <a title="Home" href="index.html">
                                        <span className="overflow">Main Demo</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Demo 2" href="demo-2.html" data-dsn-text="Demo 2">
                                        <span className="overflow">Demo 2</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="infinity work" href="infinity-work.html" data-dsn-text="infinity work">
                                        <span className="overflow">infinity work</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a title="parallax carousel" href="parallax-carousel.html"
                                        data-dsn-text="parallax carousel">
                                        <span className="overflow">parallax carousel</span>
                                    </a>
                                </li>

                            </ul> */}
                        </li>

                        <li className="nav-item has-sub-menu">
                            <a title="Home" href="#0">
                                <span className="overflow ">Portfolio</span>
                            </a>
                            {/* <ul className="nav-item">
                                <li className="dsn-back">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                            viewBox="0 0 400.004 400.004" xmlSpace="preserve">
                                            <g>
                                                <path
                                                    d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z" />
                                            </g>
                                        </svg>
                                        <span className="text-toggle-back">
                                            <span className="text-name">Portfolio</span>
                                            <span className="text-back">Back</span>
                                        </span>
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <a title="work grid 2 col" href="work-grid.html" data-dsn-text="work grid 2 col">
                                        <span className="overflow">work grid 2 col</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a title="work grid 3 col" href="work-grid-2.html" data-dsn-text="work grid 3 col">
                                        <span className="overflow">work grid 3 col</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a title="horizontal Scroll" href="work.html" data-dsn-text="Portfolio">
                                        <span className="overflow">horizontal Scroll</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a title="work massonary" href="work-massonery.html" data-dsn-text="work massonary">
                                        <span className="overflow">work massonary</span>
                                    </a>
                                </li>
                            </ul> */}
                        </li>

                        <li className="nav-item ">
                            <a title="About" href="about.html">
                                <span className="overflow">About</span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a title="Contact" href="contact.html">
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