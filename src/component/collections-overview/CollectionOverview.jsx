import React from "react"
import CollectionOverview from "./collection-overview-style"
import { useSelector } from "react-redux"
import { selectShopCollectionsMap } from "../../redux/shop/shop.selectors"
import CollectionPreview from "../collections-preview/CollectionPreview"

const CollectionOverviewComponent = () => {
    const collections = useSelector(state => selectShopCollectionsMap(state))

    const preview = collections.map(collection => { return <CollectionPreview object={collection} key={collection.id} /> })

    return <CollectionOverview>
        {preview}
    </CollectionOverview>
}
export default CollectionOverviewComponent