import React from "react"
import CustomButton from "./custom-button"

const CustomButtonComponent = (props) => {
    return <CustomButton>
        {props.text}
    </CustomButton>
}
export default CustomButtonComponent