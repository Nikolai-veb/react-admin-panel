import React from "react"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderNotification from "./HeaderNotification/HeaderNotification"
import HeaderChat from "./HeaderChat/HeaderChat"
import HeaderProfile from "./HeaderProfile/HeaderProfile"
//interface HeaderNavBarProps {

//}
const HeaderNavBar = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <HeaderSearch />
        <HeaderNotification />
        <HeaderChat />
        <HeaderProfile />
      </ul>
    </nav>
  )
}

export default HeaderNavBar
