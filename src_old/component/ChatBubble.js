import React from 'react';
import './ChatBubble.css'

function ChatBubble(props) {
  return (
    <div className="chat-bubble">
      {props.message}
    </div>
  );
}

class ChatInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: ''
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }

  render() {
    return (
      <div className="chat-interface">
        <div className="chat-container">
          {this.state.messages.map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}
        </div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.input}
            onChange={event => this.handleChange(event)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
