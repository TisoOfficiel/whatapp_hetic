const now = new Date();
const minutes = now.getMinutes().toString().padStart(2, '0');

export const MessageAnswer = [
    {message_content: 'Bonjour',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Comment vas-tu ?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Bonjour',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Quoi de neuf ?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Enchanté de vous rencontrer',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Comment s\'est passée votre journée?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Avez-vous des projets pour le week-end?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Quel temps fait-il chez vous?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Avez-vous vu le dernier film à la mode?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Quel est votre livre préféré?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Avez-vous des animaux de compagnie?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Avez-vous voyagé récemment?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
    {message_content: 'Avez-vous des hobbies?',delivered_at: `${now.getHours()}:${minutes}`, status:'recipient'},
];
