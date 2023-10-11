import styled from 'styled-components';

export const LeadMagnetWidgetWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

export const FormGroup = styled.div`
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PrivacyNote = styled.p`
  font-size: 12px;
  color: #777;
`;
