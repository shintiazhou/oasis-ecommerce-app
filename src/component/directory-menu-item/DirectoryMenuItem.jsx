import React, { useEffect } from "react"
import { DirectoryMenuItem } from "./directory-menu-item-style"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom"

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
        <motion.div className="background"
            variants={containerVariants}
            ref={ref}
            animate={controls}
            initial="hidden"
            style={{
                backgroundImage: `url(${props.object.imageUrl})`
                , justifyContent: props.object.align === "right" ? "flex-end" : "flex-start"
            }}
        >

            <div className="content">
                <h1 className="title">
                    {props.object.title.toUpperCase()}
                </h1>
                <p className="description">
                    {props.object.description}
                </p>
                <Link
                    className="button"
                    to={`shop/${props.object.title.toLowerCase()}`}
                >{`Shop ${props.object.title}`}</Link>
            </div>

        </motion.div>

    </DirectoryMenuItem>
}
export default DirectoryMenuItemComponent