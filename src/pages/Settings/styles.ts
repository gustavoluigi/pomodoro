import styled from 'styled-components';
import ReactSlider from 'react-slider';


export const StyledReactSlider = styled(ReactSlider)`
  height: 40px;
  border: 2px solid var(--red);
  border-radius: 20px;
  margin-top: .5rem;
  display: flex;
  align-items: center;

  &:not(.green) {
    margin-bottom: 1rem;
  }

  &.green {
    border-color: var(--green);

    .thumb {
      background-color: var(--green);
    }
  }

  .thumb {
    background-color: var(--red);
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
`;