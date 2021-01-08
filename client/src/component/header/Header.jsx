import React, { useState, useEffect } from "react"
import Header from "./header-style"
import { ReactComponent as Logo } from "../../assets/oasis-logo.svg"
import { Link } from "react-router-dom"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-menu/CartMenu"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { useSelector } from "react-redux"


const HeaderComponent = () => {
    const user = useSelector(state => selectCurrentUser(state))

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
        backgroundColor: pos === "top" ?
            "rgba(0, 0, 0, 0)" :
            "rgba(68, 132, 135, .8)"
        ,
        color: pos === "top" && "#214142"
    }

    return <div id="outer-container">
        <Header style={styles}>
            <div className="header left">
                <Link
                    className="header left option"
                    to="/shop">SHOP</Link>

                <span className="header left option">ABOUT US</span>
            </div>

            <Link
                to="/"
                className="header logo-container">
                <Logo className="header logo-container logo" />
            </Link>

            <div className="header right">
                <Link
                    to={user ?
                        "/account" :
                        "/account/login"}
                    className="header right option">
                    {user ?
                        "Account"
                        : "Log In"}
                </Link>
                <CartIcon
                    className="header cart-icon" />
            </div>
        </Header>
        <CartDropdown />
    </div>
}

export default HeaderComponent