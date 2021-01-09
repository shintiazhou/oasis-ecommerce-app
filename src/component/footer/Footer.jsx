import React from "react"
import SocialMediaIcon from "../SocialMediaIcon"
import Footer from "./footer-style"
import { ReactComponent as Logo } from "../../assets/oasis-logo.svg"

const FooterComponent = () => {
    return <Footer>
        <div className="icons">
            <SocialMediaIcon />
            <div className="logo">
                <Logo />
            </div>

            <span className="description">&copy; 2020 by Shintia Zhou All Rights Reserved</span>
        </div>
    </Footer>
}
export default FooterComponent