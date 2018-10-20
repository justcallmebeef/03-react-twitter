import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './MessageList.css';

const Message = ({ message }) => {
  const timestamp = new Date(message.timestamp);

  return (
    <div className="Message">
      <p>
        @
        {message.handle}
      </p>
      <p>{message.text}</p>
      <div>
        <p>
          <i className="fa fa-star" />&nbsp;
          {message.star_count}
        </p>
        <p>{timestamp.toDateString()}</p>
      </div>
    </div>
  );
};

Message.defaultProps = {
  message: ''
};

Message.propTypes = {
  message: PropTypes.string
};

const MessageList = ({ messages }) => (
  <div className="MessageList">
    {messages.map(message => <Message key={message.messages_id} message={message} />)}
  </div>
);

MessageList.defaultProps = {
  messages: []
};

MessageList.propTypes = {
  messages: PropTypes.array
};

export default MessageList;
