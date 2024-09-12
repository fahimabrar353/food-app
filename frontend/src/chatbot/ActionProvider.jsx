// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.selectedItem = null;
  }

  handleItemClick = (item) => {
    this.selectedItem = item;
    const message = this.createChatBotMessage(
      `How many ${item}s would you like to order?`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleQuantity = (quantity) => {
    const message = this.createChatBotMessage(
      `Great! Now please provide your delivery address.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    this.quantity = quantity;
  };

  handleAddress = (address) => {
    const message = this.createChatBotMessage(
      `Thank you! You've ordered ${this.quantity} ${this.selectedItem}(s) and it will be delivered to ${address}.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    // Reset the order after confirmation
    this.selectedItem = null;
    this.quantity = null;
  };
}

export default ActionProvider;
