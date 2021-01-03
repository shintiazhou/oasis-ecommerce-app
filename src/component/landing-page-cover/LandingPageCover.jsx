import React from "react"
import { LandingPageCover, Caption, Button } from "./landing-page-cover-style"
import { withRouter } from "react-router-dom"

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

const LandingPageCoverComponent = (props) => {
    return <LandingPageCover
        style={{
            backgroundImage: "url(https://i.ibb.co/6vq7wyv/landing-page.jpg)"
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <Caption
            variants={childVariants}
            animate="visible">
            <div className="title">
                "Style is something each of us already has, all we need to do is find it."
                </div>
            <div>
                <Button
                    onClick={() => props.history.push("shop")}
                >
                    Shop Now
                </Button>
            </div>
        </Caption>


    </LandingPageCover>
}
export default withRouter(LandingPageCoverComponent)