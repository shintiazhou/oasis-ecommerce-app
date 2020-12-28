import React from "react"
import CollectionPreview from "./collection-preview-style"
import CollectionItem from "../collection-Item/CollectionItem"

const CollectionPreviewComponent = (props) => {
    return <CollectionPreview>
        <h2 className="title">
            {props.object.title.toUpperCase()}
        </h2>
        <div className="preview">
            {props.object.items.filter((item, index) => {
                return index < 8
            }).map(item => <CollectionItem object={item} key={item.id} />)}
        </div>
    </CollectionPreview>
}
export default CollectionPreviewComponent