// Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { getRandomDefaultMessage } from '../utils/getRandomDefaultMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = (text) => {
    const now = new Date();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const newMessage = {
      id: messages.length + 1,
      content: text,
      status: 'sender',
      delivered_at: `${now.getHours()}:${minutes}`,
    };

    setMessages([...messages, newMessage]);

    const maxId = messages.reduce((max, message) => (message.id > max ? message.id : max), 0);
    setTimeout(() => {
      const randomDefaultMessage = getRandomDefaultMessage();
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: maxId + 2, content: randomDefaultMessage.message_content, status: randomDefaultMessage.status, delivered_at: randomDefaultMessage.delivered_at },
      ]);
    }, 2000);
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        style={{ height: windowHeight * 15, marginBottom: 16 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
      >
        <MessageList messages={messages} />
      </ScrollView>
      <MessageInput onSend={handleSend} />
    </View>
  );
};

export default Chat;