import React from "react"
import Account from "./account-style"
import { useDispatch, useSelector } from "react-redux"
import { signOutStart } from "../../redux/user/user.actions"
import { selectCurrentUser } from "../../redux/user/user.selectors"

const AccountComponent = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => selectCurrentUser(state))
    return <Account>
        <h1 className="heading">My Account</h1>
        <div className="subheading">
            <span className="account-info">Account Info</span>
            <span
                onClick={() => dispatch(signOutStart())}
                className="log-out">Log out</span>
        </div>

        <div className="container">
            <div className="option">
                <span>Name</span>
                <span className="info">
                    {currentUser.displayName}
                </span>
            </div>
            <div className="option">
                <span>Email</span>
                <span className="info">
                    {currentUser.email}
                </span>
            </div>
        </div>
    </Account>
}
export default AccountComponent