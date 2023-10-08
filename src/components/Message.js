// Message.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/style/stylesheet';

const Message = ({ message }) => {
  return (
    <View key={message.id}>
      <Text style={[styles.messageText, styles.messageContainer, message.status === 'sender' ? styles.senderMessage : styles.receiverMessage]}>{message.content}</Text>
      <View style={[message.status === 'sender' ? styles.deliveryTimeContainerSenderMessage : styles.deliveryTimeContainerReceiverMessage]}>
        <Text style={styles.deliveryTimeText}>{message.delivered_at}</Text>
      </View>
    </View>
  );
};

export default Message;