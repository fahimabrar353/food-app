import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

const App = () => {
  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default App;
