import React from "react";
import styled from "styled-components";

interface IPauseButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PauseButton: React.FC<IPauseButton> = ({ onClick }) => {
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
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </StyledButton>
  );
};

export default PauseButton;

const StyledButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: 0;
  outline: 0;
  display: inline-block;
  width: 80px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;
