import { MessageAnswer } from '../assets/data/messageAnswer';

export const getRandomDefaultMessage = () => {
    const randomIndex = Math.floor(Math.random() * MessageAnswer.length);
    return MessageAnswer[randomIndex];
};