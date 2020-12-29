import React from "react"
import CollectionPreview from "./collections-preview-style"
import CollectionItem from "../collections-Item/CollectionsItem"
import { useLocation, Link } from "react-router-dom"

const CollectionPreviewComponent = (props) => {
    const location = useLocation()
    return <CollectionPreview>
        {console.log(location.pathname)}

        <Link
            className="title"
            to={`${location.pathname}/${props.object.routeName}`}>
            {props.object.title.toUpperCase()}
        </Link>
        <div className="preview">
            {props.object.items.filter((item, index) => {
                return index < 8
            }).map(item => <CollectionItem object={item} key={item.id} />)}
        </div>
    </CollectionPreview>
}
export default CollectionPreviewComponent