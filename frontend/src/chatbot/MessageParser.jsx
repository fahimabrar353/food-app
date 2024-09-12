// MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.menuItems = [
      "Biriyani",
      "Burger",
      "Chowmein",
      "French Fries",
      "Fried Chicken",
      "Fried Rice",
      "Pizza",
      "Sandwich",
    ];
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Check if the message matches a menu item
    const selectedItem = this.menuItems.find((item) =>
      lowerCaseMessage.includes(item.toLowerCase())
    );

    if (selectedItem) {
      this.actionProvider.handleItemClick(selectedItem);
    } else if (parseInt(message)) {
      // If the message is a number, treat it as quantity
      this.actionProvider.handleQuantity(parseInt(message));
    } else {
      // Assume it's an address if it doesn't match item or quantity
      this.actionProvider.handleAddress(message);
    }
  }
}

export default MessageParser;
