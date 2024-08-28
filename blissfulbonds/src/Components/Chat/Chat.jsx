import React from 'react'
import './Chat.css'
import { BiSolidMessageDetail } from "react-icons/bi";
import Back from "../../images/image copy 4.png"
import { BsEmojiSmileFill } from "react-icons/bs";
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <>
   <div className="leftC">
    <div className="Chat">
      <ul>
        <li>Chat</li>
        <li><i><BiSolidMessageDetail/></i></li>
      </ul>
      
    </div>
    <div className="left1">
      <input type="text" placeholder="Search for new chat"/>

    </div>
    
   </div>
   <div className="mainC">
   <div className="type">
      <i><BsEmojiSmileFill/></i>
      <input type="text" placeholder="Type your message here"/>

    </div>
   </div>
   
      
    </>
   </motion.div>
  )
}

export default Chat
