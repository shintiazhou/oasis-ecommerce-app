import React from "react"
import { LandingPageCover, Title } from "./landing-page-cover-style"
import { Link } from "react-router-dom"
const containerVariants = {
    hidden: {
        opacity: 0,
        y: -250
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.4,
            delay: .3,
        }
    }
}
const childVariants = {
    visible: {
        y: 20,
        transition: {
            duration: 1.5,
            yoyo: Infinity
        },

    }
}

const LandingPageCoverComponent = () => {
    return <LandingPageCover
        style={{
            backgroundImage: "url(https://i.ibb.co/6vq7wyv/landing-page.jpg)"
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <Title
            variants={childVariants}
            animate="visible">

            "Style is something each of us already has, all we need to do is find it."
            <div>

                <Link className="button" to="/shop">
                    Shop Now
                </Link>

            </div>
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Title>

    </LandingPageCover>
}
export default LandingPageCoverComponent