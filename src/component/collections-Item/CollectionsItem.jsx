import CollectionItem from "./collections-item-style"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

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

const CollectionItemComponent = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return <CollectionItem
        variants={containerVariants}
        ref={ref}
        animate={controls}
        initial="hidden">

        <div className="img-container">
            <div className="img"
                style={{ backgroundImage: `url(${props.object.imageUrl})` }}>
            </div>
            <div className="overlay">
                <p>{props.object.name}</p>
                <button>add to cart</button>
            </div>
        </div>

        <div className="collection-footer">
            <span className="name">{props.object.name}</span>
            <span className="price">$ {props.object.price}</span>
        </div>
    </CollectionItem>
}
export default CollectionItemComponent