import React from 'react'
import LoadScripts from '../Hooks/LoadScripts'
import Navbar from '../Shared/Navbar'
import Blogs from '../Components/Blogs/Blogs'
import Cursor from '../Components/Cursor/Cursor'
import Footer from '../Shared/Footer'

const BlogDetails = () => {
    LoadScripts()
    return (
        <body className="v-dark dsn-ajax">
            <Navbar />
            <Blogs />
            <Cursor />
            <Footer />
        </body>
    )
}

export default BlogDetails