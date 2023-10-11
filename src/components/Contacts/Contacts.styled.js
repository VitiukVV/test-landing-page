import styled from 'styled-components';

export const Link = styled.a`
  border-radius: 99px;
  line-height: 1.3;
  color: white;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 159px;
  border: 1px solid #ddd;

  &:hover,
  :focus {
    background-color: white;
    color: brown;
    border: 1px solid brown;
    border-radius: 10px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
