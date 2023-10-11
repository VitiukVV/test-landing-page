import React from 'react';
import { ItemStyled } from './QualityItem.styled';
import 'animate.css';

const Item = ({ title, animate, children }) => {
  return (
    <ItemStyled>
      {title && (
        <h3
          className={`animate__animated animate__slow ${animate} animate__infinite`}
        >
          {title}
        </h3>
      )}
      <p>{children}</p>
    </ItemStyled>
  );
};

export default Item;
