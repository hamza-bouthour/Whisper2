import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addChats } from '../store/actionCreator';
import { addUser } from '../store/actionCreator';

const mapDispatchToProps = {
    addChats: (chats) => (addChats(chats)),
    addUser: (user) => (addUser(user))
    
    
}
const mapStateToProps = state =>{
    return {
        chatsUser: state.chatsUser,
        user: state.user
    }
}

const ChatSettings = props => {
    const [data, setData] = useState('')

    useEffect(() => {
        // const fetchData = async () => {
        //     const url = 'https://api.chatengine.io/chats/';
        //     const headers = {'Project-ID': '59ccaea0-b048-4761-9868-9b242f18a0dd', 'User-Name': 'admin', 'User-Secret': 'admin'};
        //      await fetch(url, {
        //                 method: 'GET',
        //                 headers
        //             })
        //             .then(response => response.json())
        //             .then(response => setData(response))
        //             .catch(e => console.log(e))
        //             // setTimeout(() => {
        //             //     console.log('data' + data)
        //             //     console.log(props.chatsUser.chat)
        //             // }, 2000)
        // }
        // fetchData();
        console.log(props)
    }, [])
    if (data.length === 0) {
        return 'No data'
    }
    else {
        return (
            <div className="settings-container">
               <div className="settings-details">
                    <ul>
                        <li>Administrator: {props.chatsUser[0]}</li>
                    </ul>
               </div>
            </div>

        )
    }
}

// 
export default ChatSettings;