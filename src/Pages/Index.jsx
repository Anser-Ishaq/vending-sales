import React from 'react'
import Helpers from '../Helpers/Helpers';
import LoadScripts from '../Hooks/LoadScripts';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Our_work from '../Components/Our_work';
import Our_Services from '../Components/Our_Services';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';
import Cursor from '../Components/Cursor/Cursor';
const Index = () => {
    LoadScripts()
    return (
        <>
            <body className="v-dark dsn-ajax">

                {/* <svg width="0" height="0" className="p-absolute hidden">
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
                </svg> */}

                <main id="main_root" className="main-root">
                    <Navbar />
                    <div id="dsn-scrollbar">
                        <div id="page_wrapper" className="wrapper">
                            <div className="p-relative over-clip">
                                <Hero />
                                <About />
                            </div>
                            <Our_work />
                            <Our_Services />
                        </div>
                        <CTA />
                        <Footer />
                    </div>
                </main>
                <Cursor />
            </body>

        </>
    )
}

export default Index