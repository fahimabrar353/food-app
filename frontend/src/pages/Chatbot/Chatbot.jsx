import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../chatbot/chatbotConfig";
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";
// import './ChatBot.css'
const Chat =() => {
    const [showChatbot, setShowChatbot] = useState(false);
     // Function to toggle the chatbot visibility
     const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
      };
    return (
      
        <div>
        {/* Right corner arrow button */}
        <button 
          onClick={toggleChatbot}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#4741a6',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            zIndex: 1000, // Ensure the button is on top
          }}
        >
        <AiFillMessage size={20} />
        </button>
  
        {/* Conditionally render the chatbot */}
        {showChatbot && (
          <div 
            style={{
              position: 'fixed',
              bottom: '80px', // Adjust to appear above the button
              right: '20px',
              zIndex: 1000,
              width: '350px', // You can adjust the size of the chatbot window
              height: '500px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
              />
  
          </div>
        )}
      </div>
        
    )
}
export default Chat;