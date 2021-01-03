import React, { useEffect } from "react"
import AccountPage from "./account-page-style"
import AccountComponent from "../../component/account/Account"
import SignIn from "../../component/sign-in/SignIn"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import SignUp from "../../component/sign-up/SignUp"

const AccountPageComponent = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const currentUser = useSelector(state => selectCurrentUser(state))
    return <AccountPage>
        <Route
            exact
            path={props.match.path}
            render={() => currentUser ?
                <AccountComponent /> : <Redirect to="/account/login" />}
        />
        <Route
            exact
            path={`${props.match.path}/login`}
            render={() => currentUser ?
                <Redirect to="/shop" /> : <SignIn />}
        />
        <Route
            exact
            path={`${props.match.path}/register`}
            render={() => currentUser ?
                <Redirect to="/shop" /> : <SignUp />}
        />
    </AccountPage>
}
export default AccountPageComponent