import React from "react"
import DirectoryMenuItem from "./directory-menu-item-style"
import CustomButton from "../custom-button/CustomButton"
const DirectoryMenuItemComponent = (props) => {
    return <DirectoryMenuItem>
        <div className="background"
            style={{
                backgroundImage: `url(${props.object.imageUrl})`
                , justifyContent: props.object.align === "right" ? "flex-end" : "flex-start"
            }}>
            <div className="content">
                <h1 className="title">{props.object.title.toUpperCase()}</h1>
                <p className="description">{props.object.description}</p>
                <CustomButton text={`Shop ${props.object.title}`} />
            </div>

        </div>

    </DirectoryMenuItem>
}
export default DirectoryMenuItemComponent