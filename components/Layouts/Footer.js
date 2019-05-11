import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p>Hi Everyone! I’m <b>Pinal Bhatt</b> and <br/>I am a <em>Software Engineer & Developer</em>,
                                    so yes, always on learning ramp! On this site you’ll find interesting posts, articles, tutorials, news updates and links on Programming, Microservices, Cloud & Serverless, JavaScript, NodeJS, TypeScript, Angular, Vue, React, GoLang and other random thoughts and opinions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Menu</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Featured</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>My Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="item">
                                    <div className="item col-lg-12">
                                        <div className="single-team">
                                            <div className="team-image">
                                                <img src={require("../../images/pb.png")} alt="image" />
                                            </div>

                                            <div className="team-content">
                                                <div className="team-info">
                                                    <h3>Pinal Bhatt</h3>
                                                    <span>Software Engineer, NY</span>
                                                </div>
                                                <ul className="social-links">
                                                    <li>
                                                        <Link href="https://twitter.com/pbdesk">
                                                            <a className="twitter" target="_blank"><Icon.Twitter /> </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.facebook.com/Go.PBDesk">
                                                            <a className="facebook" target="_blank"><Icon.Facebook /></a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://github.com/PinalBhatt">
                                                            <a className="github" target="_blank"><Icon.GitHub /></a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.linkedin.com/in/pinalbhatt/">
                                                            <a className="linkedin" target="_blank"><Icon.Linkedin /></a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p><b>PBDesk.com</b>: from the desk of <b><em>Pinal Bhatt</em></b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}
