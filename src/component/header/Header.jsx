import React, { useState, useEffect } from "react"
import Header from "./header-style"
import { ReactComponent as Logo } from "../../assets/oasis-logo.svg"

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
    return <Header
        style={{
            backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(68, 132, 135, .8)"
            , color: pos === "top" && "#214142"
        }}
    >
        <div className="left">
            <span className="option">SHOP</span>
            <span className="option">ABOUT US</span>
        </div>

        <div className="logo-container">
            <Logo className="logo" />
        </div>
        <div className="right">
            <span className="option">LOG IN</span>
            <span className="option">CART</span>
        </div>


    </Header>
}

export default HeaderComponent