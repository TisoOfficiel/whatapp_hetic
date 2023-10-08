import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../assets/style/stylesheet';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    onSend(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nouveau message"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <Button title="Envoyer" onPress={handleSend} style={{ borderRadius: 20 }} />
    </View>
  );
};

export default MessageInput;