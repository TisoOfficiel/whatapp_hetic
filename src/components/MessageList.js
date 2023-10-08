// MessageList.js
import React from 'react';
import { View, Text } from 'react-native';
import Message from './Message';
import styles from '../assets/style/stylesheet';

const MessageList = ({ messages }) => {
  return (
    <View>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </View>
  );
};

export default MessageList;