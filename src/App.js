import React from "react";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";

const projectID = '83e69ea0-a444-4f20-8ecd-bc52a3264202'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
  return (
   
    <ChatEngine
      height="100vh"
      projectID={projectID}      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
};

export default App;
