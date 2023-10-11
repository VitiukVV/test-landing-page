import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  transition: 0.3s;
  border-radius: 50%;
  margin: 0 7.5px;

  &:hover,
  :focus {
    background-color: blueviolet;
    color: blueviolet;
    border: 1px solid white;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
