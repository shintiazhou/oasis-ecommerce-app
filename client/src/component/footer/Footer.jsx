import React from "react"
import Footer from "./footer-style"
import { ReactComponent as Logo } from "../../assets/oasis-logo.svg"
import { TiSocialInstagram, TiSocialTwitter, TiSocialPinterest, TiSocialFacebook } from "react-icons/ti";

const FooterComponent = () => {
    return <Footer>
        <div className="icons">
            <a href="https://www.instagram.com/shintiazz/" rel='noreferrer' target="_blank" >
                <TiSocialInstagram size="30px" />
            </a>
            <div>
                <TiSocialTwitter size="30px" />
            </div>
            <div>
                <TiSocialPinterest size="30px" />
            </div>
            <a href="https://www.facebook.com/shintia.zhou/" rel='noreferrer' target="_blank" >
                <TiSocialFacebook size="30px" />
            </a>
        </div>
        <div className="logo">
            <Logo />
        </div>

        <span className="description">&copy; 2020 by Shintia Zhou All Rights Reserved</span>
    </Footer>
}
export default FooterComponent