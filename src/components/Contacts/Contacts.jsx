import { Container, SectionStyled } from 'components/helpers/styled';
import React from 'react';
import { Link } from './Contacts.styled';
import ContactForm from './ContactForm';
import { useLocalStorage } from 'components/helpers/useLocalStorage';

const Contacts = () => {
  const [setFeedback] = useLocalStorage('feedback');

  const formSubmitHandler = (name, number, email, text) => {
    setFeedback({ name, number, email, text });
  };

  return (
    <SectionStyled>
      <Container>
        <h2>Зв'яжіться з нами</h2>
        <p>
          Одне повiдомлення може стати початком нового етапу для вашого бізнесу
        </p>
        <Link href="mailto:team@vnv.solutions">team@vnv.solutions</Link>
        <Link href="https://t.me/vnv_solutions">Telegram</Link>
        <Link href="https://web.whatsapp.com/">Whatsapp</Link>
        <Link href="https://www.viber.com/ua/">Viber</Link>
        <ContactForm onSubmitForm={formSubmitHandler}></ContactForm>
      </Container>
    </SectionStyled>
  );
};

export default Contacts;
