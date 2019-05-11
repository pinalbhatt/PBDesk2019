import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather';
import OwlCarousel from 'react-owl-carousel3';

const slideOptions = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

class SkillCarousel extends React.Component {
    render() {
        return (
            <section className="works-area ptb-80 bg-f7fafd">

                <div className="row m-0">
                    {/* <div className="works-slides"> */}
                    <OwlCarousel
                        className="owl-theme"
                        {...slideOptions}
                    >
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/javascript.png")} alt="Javascript & ES6" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Javascript & ES6</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/nodejs.png")} alt="NodeJS" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>NodeJS</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/expressjs.png")} alt="Express JS" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Express JS</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/mocha.png")} alt="Mocha & Chai" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Mocha & Chai</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/jest.png")} alt="Jest" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Jest</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/typescript.png")} alt="TypeScript" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>TypeScript</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/lambda.png")} alt="AWS Lambda" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>AWS Lambda</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/skills/nodejs.png")} alt="NodeJS" />
                                    <div className="works-content">
                                        <h3>
                                            <Link href="#">
                                                <a>NodeJS</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>

                    {/* </div> */}
                </div>

                <div className="shape8 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
            </section>
        )
    }
}

export default SkillCarousel
