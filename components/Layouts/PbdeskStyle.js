import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/pbdesk.css'
import '../../assets/css/slick.css'
import '../../assets/css/responsive.css'
import '../../assets/css/animate.css'
import React from 'react'
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';

class PbdeskStyle extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <header id="header">
                <div id="navbar" className="startp-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link"><Icon.Home /> Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/features">
                                            <a className="nav-link"><Icon.Feather /> Featured</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link"><Icon.Bold /> Blog</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link"><Icon.User /> About</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/*<div className="others-option">*/}
                            {/*    <Link href="#">*/}
                            {/*        <a className="btn btn-light">Support</a>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="#">*/}
                            {/*        <a className="btn btn-primary">Login</a>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </nav>
                    </div>
                </div>

            </header>
        )
    }
}

export default PbdeskStyle;
