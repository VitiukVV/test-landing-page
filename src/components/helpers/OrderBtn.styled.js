import styled from 'styled-components';

export const OrderBtnStyled = styled.button`
  cursor: pointer;
  padding: 16px 32px;
  margin: 15px auto 0;
  color: #fff;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  background: #1e2827;
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover,
  :focus {
    border: 1px solid white;
    border-radius: 10px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  animation: pulse 0.5s linear infinite alternate;
  opacity: 1 !important;
  visibility: visible !important;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.05);
    }
  }
`;
