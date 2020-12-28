import React, { useEffect } from "react"
import Homepage from "./homepage-style"
import Directory from "../../component/directory/Directory"
import LandingPageCover from "../../component/landing-page-cover/LandingPageCover"


const HomepageComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <Homepage>
        <LandingPageCover />
        <Directory />
    </Homepage>
}
export default HomepageComponent