import { useEffect  } from 'react';
import '../src/css/main.scss'
import ChatFeed from '../src/components/ChatFeed';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/configureStore';
import { ChatEngine } from 'react-chat-engine';
import Loginform from './components/LoginForm';

const store = ConfigureStore();

function App() {
  useEffect(() => {
    setTimeout(() => {
      const photoChild =  document.getElementsByClassName("ce-settings-container");
      photoChild[0].children[2].style.cssText = "";
      photoChild[0].children[2].firstChild.style.cssText = "";
      photoChild[0].children[3].firstChild.style.cssText = "";
      photoChild[0].children[3].firstChild.firstChild.style.cssText = "";
      photoChild[0].children[1].style.cssText = "";
      photoChild[0].children[1].firstChild.style.cssText = "";
    }, 3000)
  }, [])
  if(!localStorage.getItem('username')) {
    return <Loginform />
  }
  return (
    <Provider store={store}>
      <ChatEngine 
            height= "100vh"
            projectID= "59ccaea0-b048-4761-9868-9b242f18a0dd"
            userName={localStorage.getItem('username') || 'admin'}
            userSecret={localStorage.getItem('password' || 'admin')}
            renderChatFeed={(chatProps) =>  <ChatFeed {... chatProps}/>} 
        />
    </Provider>
  );
}
export default App;
