import React from "react";
import styled from "styled-components";

interface IBackButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const BackButton: React.FC<IBackButton> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
      Voltar
    </StyledButton>
  );
}

export default BackButton;

const StyledButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: 0;
  outline: 0;
  display: inline-block;
  width: 80px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  width: auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scale(1.04);
  }

  svg {
    width: 36px;
    margin-right: 0.5rem;
  }
`;