import React from 'react'
import * as C from "./styles";
import { auth, db } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from '../SiderbarChatsItem';
const SiderbarChats = ({setUserChat, userChat}) => {

  const [user] = useAuthState(auth);
  const refChat = db.collection("chats").where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);
  return (
    <C.Container>
      {chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem id={item.id} users={item.data().users} user={user} setUserChat={setUserChat} 
          active={userChat?.chatId === item.id ? "active" : ""}/>
        </C.Content>
      ))}
    </C.Container>
  )
}

export default SiderbarChats