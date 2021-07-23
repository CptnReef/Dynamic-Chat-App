import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handling credentials
        const authObject = {'Project-ID':'18dd7de2-f8f0-44e7-a3e5-f85eca881a1b','User-Name': username,'User-Secret':password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers:authObject});

            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload();
        } catch(error) {

        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text' 
                    value={username} onChange={(event) => setUsername(event.target.value)} 
                    className='input' 
                    placeholder='Username'
                    required
                    />
                    <input 
                    type='password' 
                    value={password} onChange={(event) => setPassword(event.target.value)} 
                    className='input' 
                    placeholder='Password'
                    required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}