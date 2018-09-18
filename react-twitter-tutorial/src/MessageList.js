import React, { Component } from 'react';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';
import './MessageList.css';

const Message = ({ message }) => {
  return (
    <div className="Message">
      <p>@{message.handle}</p>
      <p>{message.text}</p>
      <div>
        <p><i className="fa fa-star"></i>{message.stars}</p>
        <p>{moment(message.timestamp).format("llll")}</p>
      </div>
    </div>
  )
}

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div>
        {messages.map(message =>
          <Message
            key={message.messages_id}
            message={message}
          />)}
      </div>
    )
  }
}

export default MessageList;
