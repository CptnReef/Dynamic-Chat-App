import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="18dd7de2-f8f0-44e7-a3e5-f85eca881a1b"
            userName="Soldja"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App