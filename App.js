import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Chat from './src/components/Chat';
import styles from './src/assets/style/stylesheet';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
      >
        <Chat />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;