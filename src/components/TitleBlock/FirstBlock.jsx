import OrderBtn from 'components/helpers/OrderBtn';
import { ImageWrapper, MainTitleWrapper } from './FirstBlock.styled';
import { Container, SectionStyled } from 'components/helpers/styled';

const FirstBlock = () => {
  return (
    <SectionStyled>
      <Container>
        <ImageWrapper>
          <h2>
            Your IT solutions
            <br /> in reliable hands
          </h2>

          <img
            src="https://vnv.solutions/img/vnv%20logo-05.png"
            width="70"
            alt="logo"
            loading="lazy"
          />
        </ImageWrapper>

        <MainTitleWrapper>
          <h1>Easy, quality, IT - winning solutions for your business</h1>
          <OrderBtn>Order now</OrderBtn>
        </MainTitleWrapper>
      </Container>
    </SectionStyled>
  );
};

export default FirstBlock;
