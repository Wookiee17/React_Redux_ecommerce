import React, { Fragment } from "react";
import "./Header.css"
import Logo from "./Logo";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";

const Header = ()=>{
    return(
        <Fragment>
            <header className="main-header">
                    <section className="container header-container">
                        <Link to="/"> <Logo/></Link>
                        <HomeLink/>
                        <Nav/>
                    </section>
            </header>

        </Fragment>
    )
}

export default Header;