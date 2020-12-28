import React, { useEffect } from "react"
import CollectionOverview from "../../component/collections-overview/CollectionOverview"
import { useDispatch } from "react-redux"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
const ShopPageComponent = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCollectionsStart())
    }, [])
    return <div >
        <CollectionOverview />
    </div>
}
export default ShopPageComponent