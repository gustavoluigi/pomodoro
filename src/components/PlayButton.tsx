import styled from "styled-components";

interface IPlayButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PlayButton: React.FC<IPlayButton> = ({ onClick }) => {
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
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </StyledButton>
  );
};

export default PlayButton;

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
