import React, { useState } from "react"
import SignUp from "./sign-up-style"
import FormInput from "../custom-form-input/FormInput"
import { useDispatch } from "react-redux"
import { signUpStart } from "../../redux/user/user.actions"
import CustomButton from "../custom-button/CustomButton"

const SignUpComponent = () => {
    const [credential, setCredential] = useState({ displayName: "", email: "", password: "", confirmPassword: "" })

    const dispatch = useDispatch()
    const { email, password, displayName, confirmPassword } = credential

    const handleChange = (e) => {
        const { name, value } = e.target

        setCredential({ ...credential, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }
        dispatch(signUpStart({ email, password, displayName }))
    }
    return <SignUp>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="displayName"
                label="display name"
                handleChange={handleChange}
                value={displayName}
                required
            />
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
            <FormInput
                type="password"
                name="confirmPassword"
                label="confirm password"
                handleChange={handleChange}
                value={confirmPassword}
                required
            />
            <div className="button">
                <CustomButton
                    type="submit">
                    Sign Up
                </CustomButton>
            </div>

        </form>

    </SignUp>
}
export default SignUpComponent