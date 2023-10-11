import { Container, SectionStyled } from 'components/helpers/styled';
import React from 'react';
import OrderBtn from 'components/helpers/OrderBtn';
import 'animate.css';
import Item from './QualityItem';

const QualityBlock = () => {
  return (
    <SectionStyled>
      <Container>
        <ul>
          <Item animate="animate__bounce" title="Strategy">
            Our goal is to identify the business problem to walk away with the
            perfect and creative solution.
          </Item>
          <Item animate="animate__bounce" title="Punctuality">
            Bring the key message to the brand's audience for the best price
            within the shortest possible time.
          </Item>
          <Item animate="animate__bounce" title="Diligence">
            Research and confirm brands that present the strongest digita growth
            opportunities and minimize risk.
          </Item>
          <Item animate="animate__bounce" title="Technologies">
            Design practice focused on digital experiences. We bring forth a
            deep passion for problem-solving.
          </Item>
          <Item animate="animate__bounce" title="Сustomer focus">
            For me, there are no former clients, so once you order a website
            from me, you get my support forever
          </Item>
          <Item animate="animate__bounce" title="Integrity">
            You order a complete product, because I take care of all the stages
            of work - from analysing your business to launching a ready-made
            website
          </Item>
        </ul>
        <OrderBtn>Order now</OrderBtn>
      </Container>
    </SectionStyled>
  );
};

export default QualityBlock;
