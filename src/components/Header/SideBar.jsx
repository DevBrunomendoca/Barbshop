
import { ContentSideBar } from "./SideBarStyle"
import ListItem from "../ListItem"
import { useEffect } from "react"

const SideBar = ({ sideBar, setSideBar}) => {
  const closeSideBar = () => setSideBar(!sideBar)

  useEffect(() => {
    function closeSideBarWidth() {
      window.innerWidth >= 851
      && setSideBar(false)
    }
    closeSideBarWidth()
    window.addEventListener('resize', closeSideBarWidth)
    return () => {
      window.removeEventListener('resize', closeSideBarWidth)
    }
  }, [])

  

  return (
    <ContentSideBar  sideBar={sideBar}>
      {sideBar &&
        <ListItem onClick={closeSideBar}/>
      }
    </ContentSideBar>
  )
}

export default SideBar