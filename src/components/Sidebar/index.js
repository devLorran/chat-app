import React from 'react'
import * as C from "./styles"
import SidebarChats from "./../SidebarChats";
import SiderbarHeader from "./../SiderbarHeader";
const Sidebar = ({setUserChat, userChat}) => {
  return (
    <C.Container>
      <SiderbarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat}/>
    </C.Container>
  )
}

export default Sidebar