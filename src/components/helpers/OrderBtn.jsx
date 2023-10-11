import React from 'react';
import { OrderBtnStyled } from './OrderBtn.styled';

const OrderBtn = ({ children }) => {
  return <OrderBtnStyled type="button">{children}</OrderBtnStyled>;
};

export default OrderBtn;
