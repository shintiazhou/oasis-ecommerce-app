import React, { useState } from "react"
import SignIn from "./sign-in-style"
import FormInput from "../custom-form-input/FormInput"
import { useDispatch } from "react-redux"
import { signInWithEmailStart, signInWithGoogleStart } from "../../redux/user/user.actions"
import CustomButton from "../custom-button/CustomButton"
import { Link } from "react-router-dom"

const SignInComponent = () => {
    const [credential, setCredential] = useState({ email: "", password: "" })

    const dispatch = useDispatch()
    const { email, password } = credential

    const handleChange = (e) => {
        const { name, value } = e.target

        setCredential({ ...credential, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signInWithEmailStart({ email, password }))
    }
    return <SignIn>
        <h1>customer login</h1>
        <form onSubmit={handleSubmit}>
            <FormInput
                type="email"
                name="email"
                label="email"
                handleChange={handleChange}
                value={email}
                required
            />
            <FormInput
                type="password"
                name="password"
                label="password"
                handleChange={handleChange}
                value={password}
                required
            />
            <div className="buttons">
                <CustomButton
                    type="submit">
                    Sign In
                </CustomButton>
                <div>
                    <span>New to Oasis?</span>

                    <Link
                        className="sign-up"
                        to="/account/register"
                    > Sign Up Now!</Link>
                </div>
                <span>or</span>

                <CustomButton
                    google
                    type="button"
                    onClick={() => dispatch(signInWithGoogleStart())}
                >
                    Sign In With Google
            </CustomButton>
            </div>

        </form>

    </SignIn>
}
export default SignInComponent