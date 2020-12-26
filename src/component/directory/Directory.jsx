import React from "react"
import DirectoryMenuItem from "../directory-menu-item/DirectoryMenuItem"
import Directory from "./directory-style"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import { useSelector } from "react-redux"

const DirectoryComponent = () => {
    const sections = useSelector(state => selectDirectorySections(state))
    return <Directory>
        <div className="detail">Shop Items by Categories</div>
        {sections.map(item => <DirectoryMenuItem key={item.id} object={item} />)}
    </Directory>
}

export default DirectoryComponent