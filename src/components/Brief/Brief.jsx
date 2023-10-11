import { OrderBtnStyled } from 'components/helpers/OrderBtn.styled';
import React from 'react';
import { BriefFormWrapper, Description } from './Brief.styled';

const BriefFormBlock = () => {
  return (
    <BriefFormWrapper>
      <Description>
        Бриф - це короткий документ, який допомагає нам краще зрозуміти ваші
        потреби та вимоги. Будь ласка, заповніть бриф і дайте нам знати, як ми
        можемо вам допомогти.
      </Description>
      <OrderBtnStyled>Заповнити зараз</OrderBtnStyled>
    </BriefFormWrapper>
  );
};

export default BriefFormBlock;
