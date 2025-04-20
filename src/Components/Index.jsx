import React, { useEffect } from 'react'
import Helpers from '../Helpers/Helpers';
const Index = () => {
    useEffect(() => {
        async function loadScriptsAndInit() {
            try {
                await Helpers.loadScript("assets/js/jquery-3.7.1.min.js");
                await Helpers.loadScript("assets/js/plugins.min.js");
                await Helpers.loadScript("assets/js/plugins/dsn-grid.min.js");
                await Helpers.loadScript("assets/js/custom.js");

                // Delay slightly to ensure React is done rendering
                setTimeout(() => {
                    if (!window._dsnAlreadyInitialized && window.dsnInit) {
                        console.log("Calling dsnInit...");
                        window.dsnInit();
                        window._dsnAlreadyInitialized = true;
                    }
                }, 300);
            } catch (error) {
                console.error("Script loading failed:", error);
            }
        }

        loadScriptsAndInit();
    }, []);

    return (
        <>
            <body className="v-dark dsn-ajax">

                {/* <div id="dsn_preloader" className="preloader">

                    <div className="dsnload p-absolute">
                        <span className="dsnload__row">
                            <span className="dsnload__img">
                                <img src="/assets/img/logo-light.png" className="logo-dark" alt="GRASS" decoding="async"
                                    loading="lazy" />
                                <img src="/assets/img/logo.png" className="logo-light" alt="GRASS" decoding="async" loading="lazy" />
                            </span>
                        </span>
                        <span className="dsnload__row dsnload__row--sibling">
                            <span className="dsnload__img">
                                <img src="/assets/img/logo-light.png" className="logo-dark" alt="GRASS" decoding="async"
                                    loading="lazy" />
                                <img src="/assets/img/logo.png" className="logo-light" alt="GRASS" decoding="async" loading="lazy" />
                            </span>
                        </span>
                        <span className="dsnload__row dsnload__row--sibling">
                            <span className="dsnload__img">
                                <img src="/assets/img/logo-light.png" className="logo-dark" alt="GRASS" decoding="async"
                                    loading="lazy" />
                                <img src="/assets/img/logo.png" className="logo-light" alt="GRASS" decoding="async" loading="lazy" />
                            </span>
                        </span>
                        <span className="dsnload__row dsnload__row--sibling">
                            <span className="dsnload__img">
                                <img src="/assets/img/logo-light.png" className="logo-dark" alt="GRASS" decoding="async"
                                    loading="lazy" />
                                <img src="/assets/img/logo.png" className="logo-light" alt="GRASS" decoding="async" loading="lazy" />
                            </span>
                        </span>


                    </div>


                    <div className="logo-box v-middle">
                        <h3 className="title text-upper">GRASS</h3>
                    </div>

                    <div className="loading-count">
                        <p>0</p>
                    </div>

                    <span className="loading-text text-uppercase mt-30 dsn-container">Loading ...</span>
                    <div className="bg-load background-section d-flex align-items-end dsn-bg-pattern bg-offset bg-square">
                        <svg className="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
                            preserveAspectRatio="none">
                            <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
                                vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
                        </svg>
                    </div>

                </div> */}

                <svg width="0" height="0" className="p-absolute hidden">
                    <defs>
                        <filter id="buttonFilter">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur">
                            </feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                result="buttonFilter"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop">
                            </feComposite>
                            <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
                        </filter>
                    </defs>
                </svg>

                <main id="main_root" className="main-root">

                    {/* <!-- ========== Menu ========== --> */}
                    <header id="site_menu_header" className="site-header">
                        <div className="main-logo">
                            <a href="index.html" data-dsn-text="GRASS" className="custom-logo-link main-brand effect-ajax" rel="home"
                                aria-current="page">
                                <img src="/assets/img/logo-light.png" className="custom-logo logo-light" alt="" />
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
                                    <ul className="nav-item">
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

                                    </ul>
                                </li>

                                <li className="nav-item has-sub-menu">
                                    <a title="Home" href="#0">
                                        <span className="overflow ">Portfolio</span>
                                    </a>
                                    <ul className="nav-item">
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
                                    </ul>
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

                    <div id="dsn-scrollbar">
                        <div id="page_wrapper" className="wrapper">
                            <div className="p-relative over-clip">
                                <header className="main-header p-relative v-dark-head dsn-header-animation over-clip">
                                    <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                                        data-overlay="7">
                                        <img className="cover-bg-img" src="/assets/img/header.jpg" alt="" />
                                    </div>

                                    <div className="dsn-container">
                                        <div className="container-content p-relative z-index-1">
                                            <div className="content d-grid">
                                                <h1 className="title-lg text-upper d-flex flex-column text-effect" data-dsn-text="28">
                                                    <span>BAD</span> <span>SLIDES</span>
                                                    <span>KILL</span> <span>GOOD</span> <span>IDEAS</span>
                                                </h1>

                                                <div className="content-float pinned-scroll p-relative pt-30 d-flex flex-column">
                                                    <div className="p-relative h-100">
                                                        <div className="pinned-elements">
                                                            <div className="d-flex flex-column">
                                                                <p className="sm-title-block text-upper"> GRASS® is a global strategic
                                                                    branding
                                                                    agency for positioning and rebranding the
                                                                    world's most visionary tech companies.</p>
                                                            </div>

                                                            <ul className="mt-30">
                                                                <li>Creative Direction / Interface design</li>
                                                                <li>Experience design / product strategy</li>
                                                                <li>Concept development</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="box-img mt-30">
                                                        <img src="/assets/img/2024-letter.svg" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="footer-header p-absolute bottom-0 left-0 w-100 pb-30 z-index-1 dsn-container d-flex justify-content-between">
                                        <div className="social-box d-flex align-items-center gap-20">
                                            <p>Follow us</p>

                                            <ul className="box-social d-flex">
                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Facebook</span>
                                                                <span className="word">Facebook</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Instagram</span>
                                                                <span className="word">Instagram</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <span className="word-root">
                                                            <span className="double-word-column">
                                                                <span className="word">Youtube</span>
                                                                <span className="word">Youtube</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="dsn-btn dsn-btn-shape d-flex no-padding text-upper">

                                            <a className="button" href="#about_us" rel="nofollow"
                                                data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
                                                <span className="title-btn p-relative  z-index-1" data-animate-text="Scroll to Explore">
                                                    <span>Scroll to Explore</span>
                                                </span>
                                            </a>

                                            <span className="icon theme-color">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                </header>



                                <div id="about_us" className="about-section p-relative mt-section mb-50  text-effect"
                                    data-dsn-text="27">
                                    <div className="container">
                                        <div className="d-flex gap-50">
                                            <span className="sub-title pt-10 f-str ">[QUICK INTRO]</span>
                                            <h2
                                                className="title text-upper icon-size-30 dsn-icon-main-color d-flex align-items-center flex-wrap gap-20">
                                                We help businesses
                                                <span className="brand"><span className="dsn-icon"> <svg width="20" height="24"
                                                    viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_367_3875)">
                                                        <path
                                                            d="M18.9085 8.18824C17.3093 9.17647 16.3215 10.8706 16.3215 12.7529C16.3215 14.8706 17.5915 16.8 19.52 17.6C19.1437 18.8235 18.5793 19.9529 17.8737 20.9882C16.8389 22.4471 15.7571 23.9529 14.1579 23.9529C12.5587 23.9529 12.0883 23.0118 10.2068 23.0118C8.37243 23.0118 7.71393 24 6.20877 24C4.70361 24 3.66882 22.6353 2.49292 20.9412C0.940723 18.5882 0.0470361 15.8588 0 12.9882C0 8.32941 3.01031 5.83529 6.02063 5.83529C7.61986 5.83529 8.93687 6.87059 9.92463 6.87059C10.8653 6.87059 12.3705 5.78824 14.1579 5.78824C16.0393 5.74118 17.8267 6.63529 18.9085 8.18824ZM13.3112 3.81176C14.1108 2.87059 14.5342 1.69412 14.5812 0.470588C14.5812 0.329412 14.5812 0.141176 14.5342 0C13.1701 0.141176 11.9001 0.8 11.0065 1.83529C10.2068 2.72941 9.73648 3.85882 9.68945 5.08235C9.68945 5.22353 9.68945 5.36471 9.73648 5.50588C9.83055 5.50588 9.97166 5.55294 10.0657 5.55294C11.3357 5.45882 12.5116 4.8 13.3112 3.81176Z"
                                                            fill="var(--color-primary)"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_367_3875">
                                                            <rect width="19.52" height="24" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </span></span>
                                                to innovate and remain highly
                                                <span className="brand"><span className="dsn-icon"> <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="1000" height="356.39" viewBox="135.5 361.38 1000 356.39">
                                                    <path
                                                        d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z">
                                                    </path>
                                                </svg> </span></span>
                                                relevant to their
                                                <span className="brand"><span className="dsn-icon"> <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                                                        fill="var(--color-primary)"></path>
                                                    <path
                                                        d="M12 22.9998C14.97 22.9998 17.46 22.0148 19.28 20.3348L15.725 17.5748C14.74 18.2348 13.48 18.6248 12 18.6248C9.135 18.6248 6.71 16.6898 5.845 14.0898H2.17V16.9398C3.98 20.5348 7.7 22.9998 12 22.9998Z"
                                                        fill="var(--color-primary)"></path>
                                                    <path
                                                        d="M5.845 14.0905C5.625 13.4305 5.5 12.7255 5.5 12.0005C5.5 11.2755 5.625 10.5705 5.845 9.91055V7.06055H2.17C1.4 8.59341 0.999321 10.2852 1 12.0005C1 13.7755 1.425 15.4555 2.17 16.9405L5.845 14.0905Z"
                                                        fill="var(--color-primary)"></path>
                                                    <path
                                                        d="M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.7 1 3.98 3.465 2.17 7.06L5.845 9.91C6.71 7.31 9.135 5.375 12 5.375Z"
                                                        fill="var(--color-primary)"></path>
                                                </svg> </span></span>
                                                products
                                                <span className="brand"><span className="dsn-icon"> <svg width="49" height="24"
                                                    viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_367_3879)">
                                                        <path
                                                            d="M26.0248 0.158147C25.8676 0.180661 25.7104 0.743513 25.3961 1.05871C25.1715 1.28385 24.9021 1.28385 24.7449 1.53151C24.6775 1.62156 24.7224 1.80167 24.6551 1.95927C24.5203 2.29698 24.0937 2.34201 24.0937 2.67972C24.0937 3.06246 24.4754 3.15252 24.7898 3.42269C25.0368 3.64783 25.0817 3.80543 25.3512 3.89548C25.5982 3.98554 25.9799 3.71537 26.3167 3.80543C26.6086 3.89548 26.8781 3.96302 26.9454 4.23319C27.0128 4.50336 26.9454 4.90862 26.6086 4.86359C26.4739 4.86359 25.9799 4.68348 25.3961 4.7285C24.6326 4.81856 23.8018 5.0437 23.7344 5.87672C23.712 6.34952 24.2733 6.86734 24.7898 6.77728C25.1715 6.70974 24.9694 6.23695 25.194 6.03432C25.4859 5.76415 27.0128 7.00242 28.4499 7.00242C29.0562 7.00242 29.5053 6.84483 29.9543 6.37203C29.9768 6.34952 30.0442 6.23695 30.1115 6.23695C30.1789 6.23695 30.2687 6.30449 30.2912 6.327C31.4588 7.25008 32.3345 9.09623 36.556 9.11875C37.1622 9.11875 37.8359 9.38892 38.3972 9.90674C38.8912 10.3795 39.1832 11.0775 39.4526 11.7979C39.9017 12.8786 40.6427 13.9368 41.8103 15.085C41.8777 15.1525 42.8208 15.8955 42.9106 15.918C42.9106 15.918 43.0004 16.0981 42.978 16.1882C42.9555 16.9086 42.8432 18.9349 44.3926 19.0249C44.7743 19.0475 44.6845 18.7773 44.6845 18.5972C44.6845 18.2595 44.6172 17.8767 44.8192 17.539C45.0662 17.0437 44.2803 16.8186 44.2803 15.7379C44.3028 14.9274 43.6292 15.0625 43.2699 14.4546C43.0902 14.1169 42.8882 13.8917 42.8882 13.464C42.9555 11.0099 42.3492 9.38892 42.0798 9.00618C41.8552 8.69098 41.6307 8.60092 41.8552 8.44333C43.1352 7.6103 43.4271 6.82231 43.4271 6.82231C44.1231 5.24633 44.707 3.78291 45.5602 3.15252C45.7174 3.01743 46.1665 2.67972 46.436 2.56715C47.2219 2.18441 47.6261 1.98179 47.8506 1.75665C48.1874 1.41893 48.5018 0.675971 48.165 0.225689C47.7159 -0.337163 46.9973 0.0906047 46.6605 0.315745C44.3028 1.71162 43.966 4.14314 43.1576 5.53901C42.5064 6.66471 41.4735 7.49773 40.5304 7.56528C39.8119 7.63282 39.0484 7.47522 38.3074 7.13751C36.4662 6.327 35.4557 5.31387 35.2087 5.11124C34.7147 4.7285 30.875 0.968653 27.7538 0.811055C27.7538 0.811055 27.3721 0.0230625 27.2823 0.0230625C27.0577 0.000548411 26.8107 0.495858 26.6535 0.5634C26.4514 0.720999 26.182 0.113119 26.0248 0.158147ZM12.3275 22.5371C12.0356 22.5371 11.8111 22.2895 11.7886 21.9968V12.3157H8.55518V22.9874C8.55518 23.5278 9.00427 23.9555 9.49827 23.9555H15.0894C15.6284 23.9555 16.0325 23.5278 16.0325 22.9874V12.3383H12.8664V22.0193C12.844 22.312 12.6194 22.5371 12.3275 22.5371ZM23.0608 12.3383H18.1882C17.6268 12.3383 17.1553 12.8111 17.1553 13.3739V23.9555H20.3438V14.2745C20.3438 13.9593 20.5908 13.7341 20.8827 13.7341C21.1971 13.7341 21.4216 13.9593 21.4216 14.2745V23.978H24.6102V14.2294C24.6102 13.9593 24.8572 13.6891 25.1491 13.6891C25.441 13.6891 25.688 13.9368 25.688 14.2294V23.933H28.8765V13.3514C28.8765 12.766 28.405 12.3157 27.8436 12.3157H23.0608V12.3383ZM6.422 21.0287H3.18854V23.9555H0V12.3383H6.4669C7.02827 12.3383 7.49981 12.8111 7.49981 13.3964V19.993C7.49981 20.5784 7.02827 21.0287 6.422 21.0287ZM4.28882 14.2745C4.28882 13.9593 4.04182 13.7116 3.74991 13.7116H3.211V19.5878H3.74991C4.04182 19.5878 4.28882 19.3626 4.28882 19.0249V14.2745ZM34.0186 24.0005V21.0962H32.9183V24.0005H29.7073V13.464C29.7073 12.8786 30.1789 12.4508 30.7402 12.4508H36.1518C36.7132 12.4508 37.1847 12.9236 37.1847 13.464V24.0005H34.0186ZM34.0186 19.6778V14.3645C34.0186 14.0944 33.7716 13.8467 33.4797 13.8467C33.1878 13.8467 32.9408 14.0944 32.9408 14.3645V19.7004L34.0186 19.6778Z"
                                                            fill="var(--color-primary)"></path>
                                                        <path
                                                            d="M40.1038 23.8649C39.2281 23.8649 38.532 23.1669 38.532 22.2889C38.532 21.4108 39.2281 20.7129 40.1038 20.7129C40.9795 20.7129 41.6756 21.4108 41.6756 22.2889C41.6756 23.1669 40.9795 23.8649 40.1038 23.8649ZM40.1038 20.9605C39.3628 20.9605 38.779 21.5684 38.779 22.2889C38.779 23.0093 39.3853 23.6172 40.1038 23.6172C40.8223 23.6172 41.4286 23.0093 41.4286 22.2889C41.4286 21.5684 40.8448 20.9605 40.1038 20.9605Z"
                                                            fill="var(--color-primary)"></path>
                                                        <path
                                                            d="M39.6322 21.6367H40.1487C40.261 21.6367 40.3508 21.6592 40.4182 21.7268C40.508 21.7943 40.5529 21.8844 40.5529 22.0195C40.5529 22.1996 40.4631 22.3347 40.3059 22.4022L40.6202 23.0101H40.3732L40.1038 22.4247H39.8568V23.0101H39.6547V21.6367H39.6322ZM39.8343 22.2446H40.1487C40.2161 22.2446 40.2834 22.2221 40.3283 22.1771C40.3732 22.132 40.3957 22.087 40.3957 22.0195C40.3957 21.9519 40.3732 21.8844 40.3283 21.8619C40.2834 21.8393 40.2385 21.8168 40.1712 21.8168H39.8568V22.2446H39.8343Z"
                                                            fill="var(--color-primary)"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_367_3879">
                                                            <rect width="48.3221" height="24" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </span></span>

                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-section container">
                                    <div className="w-50 ml-auto">
                                        <p className="max-w570 mt-30">OUR
                                            EXPERTISE IS THE CORNERSTONE OF OUR SUCCESS. WITH
                                            YEARS OF
                                            EXPERIENCE IN WEB DESIGN, DEVELOPMENT, AND BRANDING, WE'VE HONED OUR SKILLS TO
                                            PERFECTION.
                                        </p>

                                        <div className="">
                                            <div className="dsn-btn dsn-btn-shape d-flex mt-30 ">

                                                <a className="button background-section v-dark effect-ajax" href="about.html">
                                                    <span className="title-btn text-upper p-relative  z-index-1 heading-color"
                                                        data-animate-text="About Me">
                                                        <span>About Me</span>
                                                    </span>
                                                </a>

                                                <span className="icon background-section v-dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                        <path
                                                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z">
                                                        </path>
                                                    </svg>
                                                </span>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <section className="our-work work-scroll section-margin">
                                <div className="container">
                                    <div className="section-title d-flex flex-column gap-20 mb-70">
                                        <div className="sub-section d-flex">
                                            <span className="number d-block">02</span>
                                            <span className="sub-title d-flex align-items-center gap-10">[Selected Work]
                                                <span className="rel">Portfolio</span>
                                                <span className="iblock">↵</span>
                                            </span>
                                        </div>
                                        <h2 className="title d-flex flex-column text-effect" data-dsn-text="28">
                                            <span>por</span>
                                            <span>tfo</span>
                                            <span>lio</span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="dsn-container">
                                    <div className="dsn-cards">
                                        <div className="dsn-cards use-v-scroll p-relative"
                                            data-dsn-option='{"speed" : 4,"center_screen" : true }'>
                                            <div className="dsn-posts ">
                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius photography">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="5">
                                                                <img src="/assets/img/portfolio/project1/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-1.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">the Heaven</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2021</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">Photography</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius Product">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="5">
                                                                <img src="/assets/img/portfolio/project2/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-2.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">BLQK COFFEE</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2021</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">Product Photography</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius architecture">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="5">
                                                                <img src="/assets/img/portfolio/project3/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-3.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">Metaline</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2018</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">Architecture</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius fashion">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="5">
                                                                <img src="/assets/img/portfolio/project4/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-4.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">Filippo Loreti</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2017</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">Fashion Styling</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius fine-arts">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="3">
                                                                <img src="/assets/img/portfolio/project5/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-5.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">Words Speak</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2016</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">Fine Arts</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius photography">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="3">
                                                                <img src="/assets/img/portfolio/project6/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-6.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">Park Road</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2016</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">photography</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>

                                                <article
                                                    className="dsn-item-post grid-item over-hidden p-relative has-border-radius photography">

                                                    <div className="box-content d-flex ">
                                                        <div className="img-cat w-100">
                                                            <div className="box-image-bg w-100 over-hidden has-border-radius before-z-index dsn-swiper-parallax-transform p-relative"
                                                                data-overlay="3">
                                                                <img src="/assets/img/portfolio/project7/1.jpg"
                                                                    className="cover-bg-img dsn-swiper-parallax-transform" alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="post-content z-index-1 d-flex flex-column p-absolute">
                                                            <div className="post-info d-flex flex-column  align-items-center">

                                                                <h2 className="post-title word-wrap d-inline-block title-lg text-upper text-effect"
                                                                    data-dsn-text="28">
                                                                    <a href="project-7.html" className="effect-ajax init-color"
                                                                        data-dsn-ajax="work">ADAPTABLE II</a>
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="d-flex justify-content-between align-items-center w-100 mt-auto p-absolute bottom-0 left-0 z-index-1 p-30">
                                                            <div className="slide-date"><span
                                                                className="filter-bg heading-color">2024</span></div>

                                                            <div className="cat d-flex">
                                                                <span className="filter-bg heading-color">photography</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="our-services services-personal section-padding v-light over-hidden">
                                <div className="title-move p-relative over-hidden mb-70 text-center">
                                    <div className="section-title not-mw grid-item  text-effect" data-dsn-text="28">
                                        <h2 className="title text-center">
                                            Branding
                                            <span className="d-block"></span>
                                            Digital beauty
                                        </h2>
                                    </div>

                                </div>

                                <div className="container">
                                    <div className="services-inner">
                                        <div className="service-item dsn-up">
                                            <div className="d-flex flex-column">
                                                <div className="title-box d-flex align-items-center gap-20">
                                                    <div className="icon background-main v-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <path
                                                                d="M15.5,6c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.122,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM24,2.5c0-1.378-1.122-2.5-2.514-2.5-4.942,.141-9.444,2.552-13.111,7.001-1.586,.019-3.168,.404-4.585,1.115-2.302,1.155-3.79,3.661-3.79,6.384v.5H5c1.068,0,2.073,.416,2.829,1.171,.755,.756,1.171,1.76,1.171,2.829v5h.5c2.723,0,5.229-1.487,6.384-3.789,.712-1.417,1.096-3,1.115-4.586,4.448-3.667,6.86-8.17,7.001-13.125ZM4.238,9.01c1.034-.519,2.165-.845,3.317-.961-.098,.132-.196,.265-.293,.4-1.553,2.167-2.712,4.684-3.092,5.551H1.019c.166-2.15,1.393-4.074,3.219-4.99Zm10.752,10.752c-.917,1.826-2.84,3.053-4.99,3.219v-3.151c.868-.38,3.384-1.539,5.552-3.092,.135-.097,.268-.194,.4-.292-.116,1.152-.442,2.283-.961,3.317Zm-.021-3.837c-1.803,1.292-3.914,2.325-4.976,2.811-.064-1.236-.576-2.389-1.457-3.271-.882-.882-2.035-1.393-3.271-1.457,.486-1.062,1.519-3.173,2.811-4.976C10.629,5.469,15.033,1.184,21.5,1c.827,0,1.5,.673,1.5,1.486-.184,6.481-4.469,10.885-8.031,13.439ZM1.732,18.732c-.85,.849-1.419,3.881-1.524,4.48l-.124,.703,.703-.124c.599-.105,3.631-.674,4.48-1.524,.472-.472,.732-1.1,.732-1.768s-.26-1.296-.732-1.768c-.943-.944-2.592-.944-3.535,0Zm2.828,2.828c-.386,.386-1.934,.831-3.227,1.106,.275-1.293,.72-2.841,1.106-3.227,.283-.283,.66-.439,1.061-.439s.777,.156,1.061,.439,.439,.66,.439,1.061-.156,.777-.439,1.061Z" />
                                                        </svg>
                                                    </div>

                                                    <h4 className="title text-upper">infographic design</h4>
                                                </div>

                                                <div className="content mt-30 d-grid grid-1-half">
                                                    <div className="text">
                                                        <p className="sm-title-block text-upper max-w570">Our branding services cover
                                                            every
                                                            aspect of your brand’s development, from logo creation to voice and
                                                            style guidelines.</p>
                                                    </div>

                                                    <ul className="text-upper text-right ml-auto body-color">
                                                        <li>CMS Integration</li>
                                                        <li>Motion &amp; Animations</li>
                                                        <li>3D Development</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="service-item dsn-up">
                                            <div className="d-flex flex-column">
                                                <div className="title-box d-flex align-items-center gap-20">
                                                    <div className="icon background-section v-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512"
                                                            height="512">
                                                            <path
                                                                d="M22.935,16.313c1.417,1.418,1.417,3.726,0,5.143l-1.479,1.479c-.687,.688-1.6,1.065-2.571,1.065s-1.885-.378-2.571-1.065l-3.625-3.624c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.625,3.624c.996,.996,2.732,.996,3.729,0l1.479-1.479c1.027-1.027,1.027-2.7,0-3.729l-.271-.271-1.865,1.865c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l1.865-1.865-2.239-2.239-1.864,1.864c-.195,.195-.512,.195-.707,0s-.195-.512,0-.707l2.218-2.218c.195-.195,.512-.195,.707,0l3.57,3.57ZM4.689,11.311c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707L1.772,6.979c-1.027-1.028-1.027-2.701,0-3.729l1.479-1.479c.996-.996,2.732-.996,3.729,0l.521,.521-1.864,1.864c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l1.864-1.864,1.989,1.989-1.864,1.864c-.195,.195-.195,.512,0,.707s.512,.195,.707,0l2.218-2.218c.195-.195,.195-.512,0-.707L7.686,1.065C6.314-.309,3.918-.31,2.543,1.065l-1.479,1.479C-.353,3.961-.353,6.269,1.065,7.687l3.625,3.624ZM23.035,5.622L6.335,22.322c-1.081,1.082-2.52,1.678-4.049,1.678H.5c-.276,0-.5-.224-.5-.5v-1.785c0-1.529,.596-2.968,1.678-4.05L18.377,.965c1.284-1.283,3.374-1.283,4.658,0,.622,.622,.965,1.449,.965,2.329s-.343,1.706-.965,2.328Zm-4.278,2.864l-3.243-3.243L2.385,18.372c-.893,.893-1.385,2.08-1.385,3.343v1.285h1.286c1.263,0,2.45-.492,3.342-1.385l13.129-13.129Zm4.243-5.192c0-.613-.238-1.188-.672-1.622-.894-.895-2.349-.895-3.244,0l-2.864,2.864,3.243,3.243,2.864-2.864c.434-.434,.672-1.009,.672-1.621Z" />
                                                        </svg>
                                                    </div>

                                                    <h4 className="title text-upper">WEB DEVELOPMENT</h4>
                                                </div>

                                                <div className="content mt-30 d-grid grid-1-half">
                                                    <div className="text max-w570">
                                                        <p className="sm-title-block text-upper">Our branding services cover every
                                                            aspect of your brand’s development, from logo creation to voice and
                                                            style guidelines.</p>
                                                    </div>

                                                    <ul className="text-upper text-right ml-auto body-color">
                                                        <li>CMS Integration</li>
                                                        <li>Motion &amp; Animations</li>
                                                        <li>3D Development</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="service-item dsn-up">
                                            <div className="d-flex flex-column">
                                                <div className="title-box d-flex align-items-center gap-20">
                                                    <div className="icon background-main v-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512"
                                                            height="512">
                                                            <path
                                                                d="M20.5,14H10V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V19.5c0,2.481,2.019,4.5,4.5,4.5H20.5c1.93,0,3.5-1.57,3.5-3.5v-3c0-1.93-1.57-3.5-3.5-3.5Zm2.5,6.5c0,1.379-1.121,2.5-2.5,2.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V3.5c0-1.379,1.122-2.5,2.5-2.5h3c1.378,0,2.5,1.121,2.5,2.5v.5h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.5h4v2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.5h4v2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.5h.5c1.379,0,2.5,1.121,2.5,2.5v3Z" />
                                                        </svg>
                                                    </div>

                                                    <h4 className="title text-upper">UI-UX DESIGN</h4>
                                                </div>

                                                <div className="content mt-30 d-grid grid-1-half">
                                                    <div className="text">
                                                        <p className="sm-title-block text-upper max-w570">Our branding services cover
                                                            every
                                                            aspect of your brand’s development, from logo creation to voice and
                                                            style guidelines.</p>
                                                    </div>

                                                    <ul className="text-upper text-right ml-auto body-color">
                                                        <li>CMS Integration</li>
                                                        <li>Motion &amp; Animations</li>
                                                        <li>3D Development</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </section>

                        </div>

                        <div className="next-page pt-section">
                            <div className="background-section has-border-radius pt-section p-relative over-hidden">
                                <div className="box-img w-100 p-absolute top-0 right-0 bottom-0 before-z-index dsn-hero-parallax-img "
                                    data-overlay="8" data-dsn-grid="move-up">
                                    <img className="cover-bg-img" src="/assets/img/bg-next.jpg" alt="" />
                                </div>

                                <div className="container">
                                    <div className="content d-flex flex-column align-items-center p-relative z-index-1">
                                        <h2 className="title-md text-effect" data-dsn-text="28">DISCOVER <span
                                            className="font-sac">Our</span> STUDIO</h2>

                                        <div className="btn-lg mt-30 gap-25">
                                            <a href="#">
                                                <div className="btn-lg-inner filter-bg">
                                                    <div className="text-inner">
                                                        <p className="text-upper heading-color">GET IN TOUCH</p>
                                                    </div>
                                                    <div className="icon-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                            <path
                                                                d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="footer-box mt-section pb-30 w-100 d-flex justify-content-between">
                                            <div className="social-box d-flex align-items-center gap-20">
                                                <p>Follow us</p>

                                                <ul className="box-social d-flex">
                                                    <li>
                                                        <a href="#">
                                                            <span className="word-root">
                                                                <span className="double-word-column">
                                                                    <span className="word">Facebook</span>
                                                                    <span className="word">Facebook</span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#">
                                                            <span className="word-root">
                                                                <span className="double-word-column">
                                                                    <span className="word">Instagram</span>
                                                                    <span className="word">Instagram</span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#">
                                                            <span className="word-root">
                                                                <span className="double-word-column">
                                                                    <span className="word">Youtube</span>
                                                                    <span className="word">Youtube</span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="info z-index-1">
                                                <ul className="">
                                                    <li className="d-flex gap-5 text-upper">
                                                        <span>Project inquiries :</span>
                                                        <a href="mailto:grass@emai.com">grass@emai.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="footer mt-60 pb-30">
                            <div className="p-relative dsn-marquee over-hidden"
                                data-dsn-option='{"speed":0,"duplicatedNumber":7,"duration":7000,"gap":60,"delayBeforeStart":1000,"direction":"left","duplicated":true,"pauseOnHover":false,"startVisible":true,"pauseOnCycle":true,"allowCss3Support":true}'>
                                <h2 className="dsn-text-marquee d-flex title-md text-upper">WE ARE GRASS</h2>
                            </div>

                            <div className="dsn-container mt-50">
                                <div className="footer-bottom d-flex justify-content-between">
                                    <div className="text-left d-flex flex-column gap-row-10">
                                        <div className="links">
                                            <ul className="d-flex gap-25">
                                                <li><a href="#">HOME</a></li>
                                                <li><a href="#">ABOUT</a></li>
                                                <li><a href="#">WORK</a></li>
                                                <li><a href="#">CONTACT</a></li>
                                            </ul>
                                        </div>

                                        <p className="cop">© 2024 GRASS. All rights reserved.</p>

                                    </div>
                                    <div className="text-right">
                                        <div className="dsn-btn dsn-btn-shape d-flex no-padding text-upper">

                                            <a className="button" href="#page_wrapper" rel="nofollow"
                                                data-dsn-option='{"ease": "power4.inOut" , "duration" : 2}'>
                                                <span className="title-btn p-relative  z-index-1" data-animate-text="Scroll to Top">
                                                    <span>Scroll to Top</span>
                                                </span>
                                            </a>

                                            <span className="icon background-section theme-color">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path
                                                        d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>

                </main>

                {/* <!-- ========== Cursor ========== --> */}
                <div id="dsn_cursor" className="ball"></div>
                <div id="dsn_cursor_inner" className="ball"></div>
            </body>

        </>
    )
}

export default Index