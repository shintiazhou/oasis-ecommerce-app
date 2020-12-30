import React from "react"
import CollectionPreview from "./collections-preview-style"
import CollectionItem from "../collections-Item/CollectionsItem"
import { withRouter } from "react-router-dom"

const CollectionPreviewComponent = (props) => {
    return <CollectionPreview>
        <span
            className="title"
            onClick={() => props.history.push(`${props.match.url}/${props.object.routeName}`)}>

            {props.object.title.toUpperCase()}
        </span>
        <div className="preview">
            {props.object.items.filter((item, index) => {
                return index < 8
            }).map(item => <CollectionItem object={item} key={item.id} />)}
        </div>
    </CollectionPreview>
}
export default withRouter(CollectionPreviewComponent)