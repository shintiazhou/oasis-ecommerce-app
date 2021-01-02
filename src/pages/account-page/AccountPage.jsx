import React from "react"
import AccountPage from "./account-page-style"
import AccountComponent from "../../component/account/Account"
import SignIn from "../../component/sign-in/SignIn"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import SignUp from "../../component/sign-up/SignUp"

const AccountPageComponent = (props) => {
    const currentUser = useSelector(state => selectCurrentUser(state))
    return <AccountPage>
        <Route
            exact
            path={props.match.path}
            render={() => currentUser ?
                <AccountComponent /> : <Redirect to="/login" />}
        />
        <Route
            exact
            path={`${props.match.path}/login`}
            render={() => currentUser ?
                <Redirect to="/" /> : <SignIn />}
        />
        <Route
            exact
            path={`${props.match.path}/register`}
            render={() => currentUser ?
                <Redirect to="/" /> : <SignUp />}
        />
    </AccountPage>
}
export default AccountPageComponent