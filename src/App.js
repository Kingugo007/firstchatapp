import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {
if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
        height = "100vh"
        projectID = 'be47773e-7157-45c6-aa02-aeb3761ae14e'
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App; 