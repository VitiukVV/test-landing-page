import { useState } from 'react';
import { Item } from './QuestionItem.styled';

const QuestionItem = ({ title, children }) => {
  const [textOpen, setTextOpen] = useState(false);

  return (
    <>
      <Item>
        <p>{title}</p>
        <span onClick={() => setTextOpen(!textOpen)}>
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L8 7L15 1" stroke="#BE1816"></path>
          </svg>
        </span>
      </Item>
      {textOpen && <p>{children}</p>}
    </>
  );
};

export default QuestionItem;
