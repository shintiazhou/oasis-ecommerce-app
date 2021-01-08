import React, { useEffect } from "react"
import { DirectoryMenuItem, Button } from "./directory-menu-item-style"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { withRouter } from "react-router-dom"

const containerVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 1.3,
            type: "spring",
            stiffness: 70
        }
    },
    hidden: { opacity: 0, y: 150 }
}


const DirectoryMenuItemComponent = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return <DirectoryMenuItem>
        <motion.div
            className={props.object.align === "right" ? "background left" : "background right"}
            variants={containerVariants}
            ref={ref}
            animate={controls}
            initial="hidden"
            style={{
                backgroundImage: `url(${props.object.imageUrl})`
                ,
                justifyContent: props.object.align === "right" ? "flex-end" : "flex-start"
            }}
        >

            <div className="content">
                <div className="overlay">
                </div>
                <h1 className="title">
                    {props.object.title.toUpperCase()}
                </h1>
                <p className="description">
                    {props.object.description}
                </p>
                <Button
                    onClick={() => props.history.push(`${props.match.url}${props.object.linkUrl}`)}
                >{`Shop ${props.object.title}`}
                </Button>
            </div>



        </motion.div>

    </DirectoryMenuItem>
}
export default withRouter(DirectoryMenuItemComponent)