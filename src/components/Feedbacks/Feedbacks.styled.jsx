import styled from 'styled-components';

const FeedbackContainer = styled.ul`
  display: flex;
  margin-top: 0;
  margin-left: 40px;
  padding: 15px;
  gap: 15px;
  justify-content: flex-start;
`;

const FeedbackItem = styled.li`
  list-style: none;
  font-weight: 500;
`;

const FeedbackButton = styled.button`
  text-align: center;
  width: 105px;
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  border: solid 1px #555;
  box-shadow: 2px 2px 4px #000000;
  background-color: #fff;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #444;
    color: #fff;
  }
`;

export { FeedbackContainer, FeedbackItem, FeedbackButton };
