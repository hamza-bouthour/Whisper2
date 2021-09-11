import { useState } from "react";
import axios from 'axios';

const Loginform = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = {
            'Project-ID': '59ccaea0-b048-4761-9868-9b242f18a0dd',
            'User-Name': userName,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: auth
            })

            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)
            window.location.reload();
        } catch (error) {
            setError('Incorrect credentials, please try again.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1  className="title">Whisper</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={userName}
                        className="input"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password"
                        value={password}
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default Loginform;