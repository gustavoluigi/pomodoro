import styled from "styled-components";

interface ISettingsButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const SettingsButton: React.FC<ISettingsButton> = ({ onClick }) => {
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
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
      Configurações
    </StyledButton>
  );
}

export default SettingsButton;


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
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.04);
  }

  svg {
    width: 36px;
    margin-right: 0.5rem;
  }
`;