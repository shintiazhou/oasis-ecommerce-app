import React, { useState, useEffect } from "react"
import Header from "./header-style"
import { ReactComponent as Logo } from "../../assets/oasis-logo.svg"
import { Link } from "react-router-dom"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"



const HeaderComponent = () => {
    const [pos, setPos] = useState("top")
    useEffect(() => {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5) {
                setPos("moved")
            } else {
                setPos("top")
            }
        })
    }, [])

    const styles = {
        backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(68, 132, 135, .8)"
        ,
        color: pos === "top" && "#214142"
    }
    return <div id="outer-container">
        <Header
            style={styles}
        >
            <div className="left">
                <Link className="option" to="/shop">SHOP</Link>
                <span className="option">ABOUT US</span>
            </div>

            <Link
                to="/"
                className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="right">
                <span className="option">LOG IN</span>
                <CartIcon />
            </div>
        </Header>
        <CartDropdown />
    </div>
}

export default HeaderComponent