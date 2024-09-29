// chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Menu from "./Menu";

const menuItems = [
  "Biriyani",
  "Burger",
  "Chowmein",
  "French Fries",
  "Fried Chicken",
  "Fried Rice",
  "Pizza",
  "Sandwich",
];

const config = {
  botName: "RestaurantBot",
  initialMessages: [
    createChatBotMessage(
      "Hello! What would you like to order today? Here's our menu:",
      {
        widget: "menuWidget",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "menuWidget",
      widgetFunc: (props) => <Menu {...props} />,
      props: { menuItems },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
