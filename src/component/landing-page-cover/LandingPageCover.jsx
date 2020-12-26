import React from "react"
import { LandingPageCover, Title, Button } from "./landing-page-cover-style"

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
                <Button>
                    Shop Now
                    </Button>
            </div>
        </Title>

    </LandingPageCover>
}
export default LandingPageCoverComponent