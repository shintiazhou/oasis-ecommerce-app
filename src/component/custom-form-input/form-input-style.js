import styled, { css } from "styled-components"

const mainColor = "#448487"

const shrinkLabel = css`
top: -14px;
font-size: 12px; 
color: ${mainColor};
`
const CustomFormInput = styled.div`
    position: relative;
    margin: 45px 0;
    .form-input {
        background: none;
        background-color: white;
        color: ${mainColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${mainColor};
        margin: 25px 0;
        &:focus {
            outline: none;
        }
        &:focus ~ .form-input-label {
            ${shrinkLabel}
        }
    }
    .form-input-label {
        color: ${mainColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
        &.shrink {
            ${shrinkLabel}
        }
    }
`
export default CustomFormInput