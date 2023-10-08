import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, ScrollView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { MessageAnswer } from './src/assets/data/messageAnswer';

const App = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const getRandomDefaultMessage = () => {
    const randomIndex = Math.floor(Math.random() * MessageAnswer.length);
    return MessageAnswer[randomIndex];
  };

  // useEffect(() => {
  //   //reset messages
  //   setMessages([]);
  // }, []);
  
  const handleSend = () => {
    if (text.length > 0) {
      const newMessage = {
        id: messages.length + 1,
        content: text,
      };

      // Ajouter le nouveau message au tableau
      setMessages([...messages, newMessage]);

      // Ajouter un message par défaut avec un identifiant unique
      const maxId = messages.reduce((max, message) => (message.id > max ? message.id : max), 0);
      const randomDefaultMessage = getRandomDefaultMessage();
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: maxId + 2, content: randomDefaultMessage.message_content },
      ]);

      // Effacer le champ de texte après l'envoi
      setText('');
    }
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <Text key={message.id} style={{ padding: 10, fontSize: 20 }}>
        {message.content}
      </Text>
    ));
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} // Ajustement personnalisé pour Android
    >
      <View style={{ padding: 10, flex: 1 }}>
        <ScrollView style={{ height: windowHeight * 0.8 }}>{renderMessages()}</ScrollView>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder="Nouveau message"
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
        <Button title="Envoyer" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default App;
