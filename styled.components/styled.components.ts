import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  background-color: #ce93d8;
  border-radius: 40px;
  box-shadow: none;
  border: none;
  width: 20%;
  font-weight: 600;
  &:hover {
    background-color: #ab47bc;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputSpan = styled.span`
  text-align: left;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;


