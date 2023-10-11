import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  font-size: 16px;
`;
export const TextArea = styled.textarea`
  display: block;
  margin-top: 5px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.button`
  width: 170px;
  font-weight: 800;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 15px 30px;
  background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
  border-radius: 100px;
  border: 1px solid black;
  color: #ffffff;
  cursor: pointer;

  &:hover,
  :focus {
    border: 1px solid yellow;
    background-image: linear-gradient(316.53deg, #326cff 13.2%, #26fff2 71.54%);
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
