
import { ContentSideBar } from "./SideBarStyle"
import ListItem from "../ListItem"

const SideBar = ({ sideBar, setSideBar }) => {
  const closeSideBar = () => setSideBar(!sideBar)

  return (
    <ContentSideBar sideBar={sideBar}>
      {sideBar &&
        <ListItem onClick={closeSideBar}/>
      }
    </ContentSideBar>
  )
}

export default SideBar