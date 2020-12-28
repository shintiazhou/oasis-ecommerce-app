import React, { useEffect } from "react"
import CollectionOverview from "../../component/collections-overview/CollectionOverview"
import { useDispatch } from "react-redux"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import { useSelector } from "react-redux"
import { selectShopisLoading } from "../../redux/shop/shop.selectors"
import WithSpinner from "../../component/withSpinner/WithSpinner"

const ShopPageComponent = () => {
    const isLoading = useSelector(state => selectShopisLoading(state))

    const dispatch = useDispatch()
    const WithSpinnerCollectionsOverview = WithSpinner(CollectionOverview)

    useEffect(() => {
        dispatch(fetchCollectionsStart())
        window.scrollTo(0, 0)
    }, [dispatch])

    return <div >
        <WithSpinnerCollectionsOverview
            isLoading={isLoading}
        />
    </div>
}
export default ShopPageComponent