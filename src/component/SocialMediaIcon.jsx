import React from "react"
import { ReactComponent as Asset1 } from "../assets/asset1.svg"
import { ReactComponent as Asset2 } from "../assets/asset2.svg"
import { ReactComponent as Asset3 } from "../assets/asset3.svg"
import { ReactComponent as Asset4 } from "../assets/asset4.svg"
import { ReactComponent as Asset5 } from "../assets/asset5.svg"

const SocialMediaIcon = () => {
    return <div>
        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/shintia.zhou/">
            <Asset1 style={{ margin: "10px", width: "35px" }} />
        </a>
        <Asset2 style={{ cursor: "pointer", margin: "10px", width: "35px" }} />

        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/shintiazz/">

            <Asset3 style={{ margin: "10px", width: "35px" }} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/shintiazhou">
            <Asset4 style={{ margin: "10px", width: "35px" }} />
        </a>
        <Asset5 style={{ cursor: "pointer", margin: "10px", width: "35px" }} />
    </div>
}
export default SocialMediaIcon