import DirectoryMenuItem from "../directory-menu-item/DirectoryMenuItem"
import Directory from "./directory-style"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import { useSelector } from "react-redux"

const DirectoryComponent = () => {
    const sections = useSelector(state => selectDirectorySections(state))
    return <Directory>
        {sections.map(item => <DirectoryMenuItem key={item.id} object={item} />)}
    </Directory>
}

export default DirectoryComponent