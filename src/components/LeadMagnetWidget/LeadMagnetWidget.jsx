import { Container, SectionStyled } from 'components/helpers/styled';
import {
  Description,
  FormGroup,
  Input,
  LeadMagnetWidgetWrapper,
  PrivacyNote,
  SubmitButton,
  Title,
} from './Lead.styled';

const LeadMagnetWidget = () => {
  return (
    <SectionStyled>
      <Container>
        <LeadMagnetWidgetWrapper>
          <Title>Отримайте безкоштовну консультацію</Title>
          <Description>
            Наша команда готова допомогти вам вирішити ваші завдання та
            відповісти на питання. Залиште свої контактні дані, і ми зв'яжемося
            з вами найближчим часом.
          </Description>
          <form>
            <FormGroup>
              <Input type="text" placeholder="Ваше ім'я" />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Ваша електронна пошта" />
            </FormGroup>
            <SubmitButton type="submit">Отримати консультацію</SubmitButton>
          </form>
          <PrivacyNote>
            Ми поважаємо вашу конфіденційність. Ваші дані залишаються
            конфіденційними.
          </PrivacyNote>
        </LeadMagnetWidgetWrapper>
      </Container>
    </SectionStyled>
  );
};

export default LeadMagnetWidget;
