import styled from "styled-components"

const CollectionPreview = styled.div`
    color:#448487;
    display: flex;
    flex-direction: column;
    margin:100px auto 0 auto;
    .title {
        font-weight:bolder;
        letter-spacing:2px;
        align-self:center;
        font-size: 28px;
        margin-bottom: 35px;
        cursor:pointer;
    }
    .preview {
        padding-bottom:100px;
        width:80vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px 20px;
        border-bottom:3px solid #448487;
        @media(max-width:1000px){
            grid-template-columns: 1fr 1fr ;
        }
    }
`
export default CollectionPreview