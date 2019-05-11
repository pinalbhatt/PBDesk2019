import React from 'react'
import Link from 'next/link'

class BlogCta extends React.Component {

    componentDidMount(){
        //
    }

    render(){
        return (
            <section className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Pinal Bhatt's Blog</h2>
                        <div className="bar"></div>
                        <p>Learning Endeavor Forever...</p>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Visit My Blog!</h3>
                        <p>Pinal Bhatt's Blog</p>
                        <Link href="/blog">
                            <a className="btn btn-primary">My Blog</a>
                        </Link>

                    </div>

                    <div className="map-bg">
                        <img src={require("./../../images/map.png")} alt="map" />
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogCta
