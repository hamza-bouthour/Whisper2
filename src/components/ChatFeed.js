import { useEffect, useContext, useState, useRef } from "react";
import MyMessage from './MyMessage';
import MessageForm from './MessageForm'
import ChatSettings from "./ChatSettings";
import ComingMessages from './ComingMessages'

import { connect } from 'react-redux';
import { addChats, setLoading, addUser, activeUserChat } from '../store/actionCreator';


const mapDispatchToProps = {
    addChats: (chats) => (addChats(chats)),
    addUser: (user) => (addUser(user)),
    activeUserChat: (chat) => (activeUserChat(chat)),
    setLoading: () => (setLoading())
    
    
}
const mapStateToProps = state =>{
    return {
        chatsUser: state.chatsUser,
        user: state.user
    }
}

const ChatFeed = (props) => {

    const [subscribe, setSubscription] = useState(true)
    
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
   
    const mounted = useRef();
    useEffect(() => {
        // const { chats, activeChat, userName, messages } = props;
        // const chat = chats && chats[activeChat];
      async  function addData() {
          console.log(chat)
          await props.activeUserChat(chat)

        }
        if (!mounted.current) {
            // do componentDidMount logic
            addData();
            mounted.current = true;
          } else {
            // do componentDidUpdate logic
            // props.activeUserChat(chat)
        }
        return function cleanUp() {
            props.activeUserChat(chat)
    }
        // const chat = chats && chats[activeChat];
        //    const fetchData = () => {
        //     props.setLoading();
        //     const url = 'https://api.chatengine.io/chats/';
        //     const headers = {'Project-ID': '59ccaea0-b048-4761-9868-9b242f18a0dd', 'User-Name': 'admin', 'User-Secret': 'admin'};
        //     return  fetch(url, {
        //                 method: 'GET',
        //                 headers
        //             })
        //             .then(response => response.json())
        //             .then(response => addChats(response))
        //             .catch(e => console.log(e))
        // }
        // fetchData();
        // const { chats, activeChat, userName, messages } = props;

        // setTimeout(() => {
           
        //     // props.addUser(';ol');
        //     // props.addChats(props.chats)
        // }, 3000)
    }, [])
 
    const renderReadReceipts = (message, isMyMessage) => {
       return chat.people.map((person, index) => 
            person.last_read === message.id && (
                <div 
                    key={`read_${index}`}
                    className="read-receipt"
                    style={{
                        float: isMyMessage ? "right" : "left",
                        backgroundImage: `url(${person?.person?.avatar})`
                    }}
                />
            )
        )
    }

    const RenderMessages = (props) => {
        const keys = Object.keys(messages)
        return keys.map((key, i) => {
            const message = messages[key]
            const lastMessageKey = i === 0 ? null : keys[i-1];
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`message_${i}`} style={{ width: "100%"}}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/> 
                            : <ComingMessages message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? "0px" : "68px"}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }
    if (!chats || !chat) return 'Loading....'

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}
                    <div className="chat-title-people">{chat.people.length}</div>
                </div>
                <div className="chat-subtitles">
                    {chat.people.map((person, i) => {
                        return (      
                                <div key={i} className="chat-subtitle"><div className="online-status-display" style={{backgroundColor: person.person.is_online ? "rgb(82, 196, 26" : "red"}}/>{person.person.username.charAt(0).toUpperCase()}{person.person.username.slice(1)} </div>     
                        )
                    }
                    )}
                </div>
            </div>
            <hr className="hr-80" />
            {RenderMessages()}
            
            <div style={{height: '100ppx'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} /> 
            </div>
            
         
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFeed);