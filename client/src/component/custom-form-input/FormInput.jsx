import React from "react"
import CustomFormInput from "./form-input-style"

const FormInputComponent = ({ label, handleChange, ...props }) => {
    return <CustomFormInput>
        <input
            className="form-input"
            onChange={handleChange}
            {...props} />
        {label ? <label className={`${props.value.length ? "shrink" : ""} form-input-label`}>
            {label}
        </label> : null}
    </CustomFormInput>
}
export default FormInputComponent