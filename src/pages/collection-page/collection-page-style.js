import styled from "styled-components"

const CollectionPage = styled.div`
    color:#448487;
    display: flex;
    flex-direction: column;
    .title{
        letter-spacing:2px;
        align-self:center;
        font-size: 28px;
        margin: 130px 0 50px 0;
        font-size:2.5em;
    }
    .collection-item{
        margin:0 auto;
        padding-bottom:100px;
        width:80vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px 20px;
        border-bottom:3px solid #448487;
        @media(max-width:1000px){
            grid-template-columns: 1fr 1fr 1fr;
        }
        
    }
`
export default CollectionPage