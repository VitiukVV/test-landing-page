import { useState } from 'react';
import { ButtonSubmit, Form, Input, TextArea } from './ContactForm.Styled.js';

const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'text':
        setText(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
    setText('');
    setEmail('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmitForm(name, number, email, text);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label>
        Email
        <Input
          onChange={handleChange}
          value={number}
          type="email"
          name="email"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label>
        Message
        <TextArea
          onChange={handleChange}
          value={text}
          name="text"
          required
        ></TextArea>
      </label>
      <ButtonSubmit type="submit">Send</ButtonSubmit>
    </Form>
  );
};

export default ContactForm;
