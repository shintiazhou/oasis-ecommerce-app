import React, { useEffect } from "react"

import { useDispatch } from "react-redux"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import { useSelector } from "react-redux"
import { selectShopisLoading, selectShopIsLoaded } from "../../redux/shop/shop.selectors"

import WithSpinner from "../../component/withSpinner/WithSpinner"
import { Route } from "react-router-dom"

import CollectionPage from "../collection-page/CollectionPage"
import CollectionOverview from "../../component/collections-overview/CollectionsOverview"

const ShopPageComponent = (props) => {
    const isLoading = useSelector(state => selectShopisLoading(state))
    const isLoaded = useSelector(state => selectShopIsLoaded(state))

    const dispatch = useDispatch()

    const WithSpinnerCollectionsOverview = WithSpinner(CollectionOverview)

    const WithSpinnerCollectionsPage = WithSpinner(CollectionPage)

    useEffect(() => {
        dispatch(fetchCollectionsStart())
        window.scrollTo(0, 0)
    }, [dispatch])

    return <div >
        <Route
            exact
            path={`${props.match.path}`}
            render={props => {
                return <WithSpinnerCollectionsOverview
                    isLoading={isLoading}
                    {...props} />
            }}
        />

        <Route
            exact
            path={`${props.match.path}/:collectionId`}
            render={props => {
                return <WithSpinnerCollectionsPage
                    isLoading={!isLoaded}
                    {...props}
                />
            }}
        />

    </div>
}
export default ShopPageComponent