import React from 'react'
import { Articles } from '../../Static/Articles'
import { useParams, Link } from 'react-router'

const Blogs = () => {
    const { link } = useParams();

    // Use the link to find the correct article
    const article = Articles.find((item) => item.link === link);
    console.log("article", article)

    if (!article) {
        return <div>Article not found</div>;
    }
    const nextBlog = Articles.find((b) => b.id === article.nextBlogId);
    console.log("next blog", nextBlog)
    return (
        <>
            {/* // <!-- ========== Header ========== --> */}
            <header className="header-project p-relative over-hidden d-flex align-items-end">

                <div className="box-img w-100 p-absolute top-0 right-0 dsn-hero-parallax-img before-z-index"
                    data-overlay="5">
                    <img className="cover-bg-img" src={article.images[0]} alt="" />
                </div>

                <div className="p-relative dsn-container dsn-hero-parallax-title  w-100 z-index-1">
                    <div className="p-relative d-flex align-items-center w-100">

                        <div className="box-content w-100 d-flex flex-column z-index-1 gap-row-20">

                            <h1 className="title-lg text-upper text-center" data-dsn-ajax="title">{article.shortTitle}</h1>

                            <div className="d-grid grid-md-2 w-80 ml-auto mr-auto">
                                <ul className="d-flex flex-column justify-content-center gap-row-10">
                                    <li className="d-flex  align-items-center gap-10">
                                        <h6 className="text-upper fw-400">Year :</h6><span>{article.year}</span>
                                    </li>
                                    <li className="d-flex  align-items-center gap-10">
                                        <h6 className="text-upper fw-400">Category :</h6>
                                        <div className="cat d-flex">
                                            <span className="filter-bg heading-color">{article.category}</span>
                                        </div>
                                    </li>

                                    {/* <li className="d-flex  align-items-center gap-10">
                                        <h6 className="text-upper fw-400">Client :</h6>
                                        <span>Creatify</span>
                                    </li> */}

                                </ul>

                                <div className="d-flex flex-column gap-row-15">
                                    <p className="description max-w570 heading-color">
                                        {article.largeTitle}</p>
                                    <div className="dsn-btn dsn-btn-shape d-inline-flex d-flex no-padding text-upper">

                                        <a className="button"
                                            href="https://www.behance.net/gallery/124633061/Heaven?tracking_source=curated_galleries_photography"
                                            target="_blank">
                                            <span className="title-btn p-relative  z-index-1"
                                                data-animate-text="View project">
                                                <span>More Blogs</span>
                                            </span>
                                        </a>

                                        <span className="icon background-section theme-color">
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
                </div>

            </header>
            {/* <!-- ========== End Header ========== --> */}

            <div id="page_wrapper" className="wrapper">

                <div className="our-work section-margin not-filter dsn-filter "
                    data-dsn-option='{"speed" : 15 , "start" : "-40px top"}'>
                    <div className="dsn-container">
                        <div className="dsn-cards">
                            <div className="dsn-posts flexibly-hover gap-30">
                                <div className="dsn-item-post grid-item p-relative">
                                    <div className="box-image-bg w-100 h-500">
                                        <img src={article.images[1]} className="cover-bg-img" alt="" />
                                    </div>
                                </div>

                                <div className="dsn-item-post grid-item p-relative">
                                    <div className="box-image-bg w-100 h-500">
                                        <img src={article.images[2]} className="cover-bg-img" alt="" />
                                    </div>
                                </div>

                                <div className="dsn-item-post grid-item p-relative">
                                    <div className="box-image-bg w-100 h-500">
                                        <img src={article.images[3]} className="cover-bg-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="project-info section-margin">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center gap-row-60">
                            <h2 className="title w-90">Infusing life into creativity, setting new standards in creative
                                innovation.</h2>

                            {article.content.map((section, idx) =>
                                <div className="d-grid grid-half-1 w-90">
                                    <div className="pinned-scroll">
                                        <div className="pinned-elements">
                                            <span>( {section.section})</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-row-10">
                                        <p>{section.text}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <div className="over-hidden section-margin">
                    <div className="img-box-parallax dsn-animate dsn-effect-down has-popup dsn-active"
                        data-dsn-grid="move-up">

                        <div className="effect-popup before-z-index h-100" data-src={article.images[4]}
                            data-caption="Web Design #1" data-fancybox="_1" data-cursor="open" data-dsn-overlay="0">
                            <img className="cover-bg-img has-direction" src={article.images[4]} alt="" />
                        </div>
                        <div className="cap"><span>{article.category}</span></div>
                    </div>
                </div>

                {/* <!-- ========== Header ========== --> */}
                <section
                    className="next-projects p-relative mt-section p-relative over-hidden d-flex justify-content-center flex-column">

                    <div className="box-img w-100 p-absolute bottom-0 right-0 dsn-hero-parallax-img before-z-index"
                        data-overlay="5">
                        <img className="cover-bg-img" src="/assets/img/about-back.jpg" alt="" />
                    </div>

                    <div className="p-relative dsn-container dsn-hero-parallax-title  w-100 z-index-1">
                        <div className="p-relative d-flex align-items-center w-100">

                            <div className="box-content w-100 d-flex flex-column z-index-1">
                                <h4 className="title-block text-upper text-center">Next Case</h4>
                                <Link to={`/blog/${nextBlog.link}`}
                                    className="effect-ajax"><h1 className="title-lg text-upper text-center" data-dsn-ajax="title">
                                        {nextBlog.shortTitle}</h1></Link>
                            </div>


                        </div>
                    </div>

                    <footer className="footer mt-60 pb-30 p-absolute bottom-0 w-100 z-index-1">
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
                                            <span className="title-btn p-relative  z-index-1"
                                                data-animate-text="Scroll to Top">
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

                </section>
                {/* <!-- ========== End Header ========== --> */}

            </div>
        </>
    )
}

export default Blogs