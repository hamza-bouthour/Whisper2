import { useEffect, useContext, useState, useRef } from "react";
import logo from './logo.svg';
import '../src/css/example.scss'
import ChatSettings from './components/ChatSettings';
import ChatFeed from '../src/components/ChatFeed';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/configureStore';
import { ChatEngine } from 'react-chat-engine';

const store = ConfigureStore();

function App() {

  useEffect(() => {

    // photoSection.lastChild.style.cssText = '';
    // photoChild.lastChild.lastChild.style.cssText = '';
    // photoChild.lastChild.firstChild.firstChild.style.cssText = '';
    // STRUCTURE
    // var element = document.getElementsByClassName("chat-feed")[0];
    // console.log(element)
      
    // subparent.style.cssText = ''
    // subparent.classList.add("container")
    // console.log(root)
    // chatsList.children[0].style.cssText = '';
    // chatsList.children[0].children[0].style.cssText = '';


  //   let newleftContainer = document.createElement('div');
  //   let newRightContainer = document.createElement('div');
  //   newleftContainer.id = "left-container"
  //   newRightContainer.id = "right-container"
  //   let root = document.getElementById('root').firstChild.lastChild;
  //   let subparent = document.getElementById('root').firstChild;
  //   root.id = 'root-container';
  //   let chatsList = root.children[0];
  //   chatsList.id = "chat-list"
  //   let chatWindow = root.children[1];
  //   chatWindow.id = "chat-window"
  //   let chatFeedContainer = chatWindow.lastChild;
  



  //   let chatSettingsContainer = root.children[2];
  //   chatSettingsContainer.id = "chat-settings"
  //  let chatsDetails = chatSettingsContainer.firstChild
   
  
  //  console.log(chatsDetails)
  //   chatsDetails.style.cssText = '';
  //   root.removeChild(chatsList)
  //   root.removeChild(chatWindow)
  //   root.removeChild(chatSettingsContainer)
  //   root.appendChild(newleftContainer)
  //   root.appendChild(newRightContainer);
  //   // chatSettingsContainer.firstChild.style.cssText = '';
  //   // chatSettingsContainer.children[0].children[0].style.cssText = '';
  //  newleftContainer.appendChild(chatsList);
  //  newleftContainer.appendChild(chatSettingsContainer);
  //  newRightContainer.appendChild(chatWindow);
   
  // //  CSS
  //  root.style.cssText = '';
  
  //  chatWindow.style.cssText = '';
  //  chatsList.style.cssText = '';
  
  //  chatSettingsContainer.style.cssText = '';
  //  chatsDetails.removeAttribute('style')
  //  root.classList.add('row', 'chatBodyContainer')
  //  newleftContainer.classList.add('col-3', 'chats_settings-container')
  //  newRightContainer.classList.add('col-9', 'chat_window')
  //  chatWindow.classList.add('chat_window_main')

    // document.getElementById("root-container").innerHTML += "<div>sdfdddd</div>";
   
    
  
    // console.log(root)
    
   
   
    // chatsContainer.classList.add('container', 'chats_container')
    // chatWindow.classList.add('container', 'chat_window')
    // chatSettingsContainer.classList.add('container', 'chats_settings-container')
   
    // function removeAllChildNodes(parent) {
    //   while (parent.firstChild) {
    //       parent.removeChild(parent.firstChild);
    //   }
    // }
    // removeAllChildNodes(root);


    

   
  }, [])
  

  return (
    <Provider store={store}>
      <ChatEngine 
            height= "100vh"
            projectID= "59ccaea0-b048-4761-9868-9b242f18a0dd"
            // renderChatList={(chatProps) =>  <ChatList {... chatProps} />}
            userName={localStorage.getItem('username') || 'admin'}
            userSecret={localStorage.getItem('password' || 'admin')}
            // renderChatSettings={(chatAppState) => <ChatSettings {... chatAppState} />}
            renderChatFeed={(chatProps) =>  <ChatFeed {... chatProps}/>} 
            // renderPeopleSettings={(creds, chat) =>  <RenderPeople {... chat}/>}
            // renderChatList={(chatState) => <ChatList {... chatState}/>}
            // // renderChatSettings={(props) => <ChatSettings />}
            // renderChatCard={(chatProps) => <ChatCard {... chatProps}/>}
        />
    </Provider>
  );
}

export default App;
