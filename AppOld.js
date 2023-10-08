import React, { useState, useEffect,useRef } from 'react';
import { Text, TextInput, View, Button, ScrollView, Dimensions, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import {getRandomDefaultMessage} from './src/utils/getRandomDefaultMessage';
import styles from './src/assets/style/stylesheet';

const AppOld = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();
  
  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = () => {
    if (text.length > 0) {
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
          { id: maxId + 2, content: randomDefaultMessage.message_content, status: randomDefaultMessage.status, delivered_at: randomDefaultMessage.delivered_at},
        ]);
      }, 2000);

      setText('');
    }
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <View key={message.id}>
        <Text style={[styles.messageText ,styles.messageContainer, message.status === 'sender' ? styles.senderMessage : styles.receiverMessage]}>{message.content}</Text>
        <View style={[message.status === 'sender' ? styles.deliveryTimeContainerSenderMessage : styles.deliveryTimeContainerReceiverMessage]}>
          <Text style={styles.deliveryTimeText}>{message.delivered_at}</Text>
        </View>
      </View>
    ));
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
    >
      <View style={{ padding: 10, flex: 1 }}>
        <ScrollView
            ref={scrollViewRef}
            style={{ height: windowHeight * 15, marginBottom: 16 }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
          >
            {renderMessages()}
          </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nouveau message"
            onChangeText={(newText) => setText(newText)}
            value={text}
          />
          <Button title="Envoyer" onPress={handleSend} style={{ borderRadius: 20 }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
};

export default AppOld;