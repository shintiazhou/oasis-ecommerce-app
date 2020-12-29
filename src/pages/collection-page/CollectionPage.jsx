import React, { useEffect}from "react"
import CollectionPage from "./collection-page-style"
import { connect } from "react-redux"
import { selectShopCollection } from "../../redux/shop/shop.selectors"
import CollectionItem from "../../component/collections-Item/CollectionsItem"

const CollectionPageComponent = ({ collection }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <CollectionPage>
        <h2 className="title">{collection.title}</h2>
        <div className="collection-item">
            {collection.items.map(item => {
                return <CollectionItem
                    object={item}
                    key={item.id}
                />
            })}
        </div>
    </CollectionPage>

}

const mapStateToProps = (state, ownprops) => ({
    collection: selectShopCollection(ownprops.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPageComponent)