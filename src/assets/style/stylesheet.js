import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  button: {
    flex: 0.1,
    borderRadius: 20,
  },
  senderMessage: {
    backgroundColor: '#279BFD',
    color: '#fff',
    alignSelf: 'flex-end',
    marginRight: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  receiverMessage: {
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
    marginLeft: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 16,
  },

  deliveryTimeContainerSenderMessage:{
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  deliveryTimeContainerReceiverMessage:{
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  deliveryTimeText:{
    color: '#B1B1B1',
  },
});

export default styles;