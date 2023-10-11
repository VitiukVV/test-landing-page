import QualityItem from 'components/QualityBlock/QualityItem';
import OrderBtn from 'components/helpers/OrderBtn';
import { Container, SectionStyled } from 'components/helpers/styled';
import React from 'react';
import { useState } from 'react';
import { ServiceBtn } from './ServiceBlock.styled';

const ServiceBlock = ({ data }) => {
  const [active, setActive] = useState(0);
  const activeButton = data[active];

  return (
    <SectionStyled>
      <Container>
        <div>
          {data.map((item, idx) => (
            <ServiceBtn
              type="button"
              key={item.id}
              onClick={() => setActive(idx)}
            >
              {item.label}
            </ServiceBtn>
          ))}
        </div>
        <div>
          <h2>{activeButton.title}</h2>
          <p>{activeButton.text}</p>
          <h3>{activeButton.subTitle}</h3>
          <ul>
            {activeButton.subText.map((text, idx) => (
              <QualityItem key={idx}>{text}</QualityItem>
            ))}
          </ul>
          <OrderBtn>Хочу</OrderBtn>
        </div>
      </Container>
    </SectionStyled>
  );
};

export default ServiceBlock;
