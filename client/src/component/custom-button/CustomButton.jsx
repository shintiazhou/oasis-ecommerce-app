import React from "react"
import CustomButton from "./custom-button-style"

const CustomButtonComponent = ({ children, ...props }) => {
    return <CustomButton {...props}>
        {children}
    </CustomButton>
}
export default CustomButtonComponent