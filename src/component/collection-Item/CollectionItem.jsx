import CollectionItem from "./collection-item-style"
import React from "react"

const CollectionItemComponent = (props) => {
    return <CollectionItem>
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