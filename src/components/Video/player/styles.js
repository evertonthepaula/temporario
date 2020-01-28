import styled from 'styled-components';

export const Video = styled.video.attrs({
  preload: 'metadata',
  controlsList: 'nodownload'
})`
  display: flex;
  width: 100%;
  height: auto;
  padding: 8px;
  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 4px;
  margin: 8px 0;
  justify-content: space-between;
`;

export const Btn = styled.button.attrs({
  type: 'button'
})`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin: 0 4px;
  min-height: 32px;
  font-size: 1.4rem;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  color: var(--color-white);
  background-color: var(--color-blue);
  border-color: var(--color-blue);

  &:hover {
    background-color: var(--color-blue-dark);
    border-color: var(--color-blue-dark);
  }
  &:focus {
    outline: solid 1px var(--color-blue-dark);
  }
`;

export const InputRange = styled.input.attrs({
  type: 'range',
  step: '0.1'
})`
  width: 100%;
  position: relative;
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  padding: 8px;
  margin: 0px 4px;
  border-radius: var(--border-radius);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  color: var(--color-white);
  background-color: var(--color-blue);
  border-color: var(--color-blue);

  &::-webkit-slider-runnable-track {
    background-color: var(--color-white);
    height: 6px;
    border-radius: 3px;
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid var(--color-white);
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: var(--color-white);
    height: 6px;
    border-radius: 3px;
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }

  &::-ms-fill-lower {
    background-color: var(--color-white);
    border-radius: 3px;
  }

  &::-ms-fill-upper {
    background-color: var(--color-white);
    border-radius: 3px;
  }

  &::-ms-tooltip {
    display: none; /* display and visibility only */
  }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    background-color: var(--color-white);
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: var(--color-white);
    height: 18px;
    width: 18px;
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid var(--color-white);
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: var(--color-white);
    height: 18px;
    width: 18px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }

  &:before {
    content: attr(label);
    width: 100%;
    position: absolute;
    bottom: calc(100% + 4px);
    left: 0;
    font-size: var(--font-micro);
    color: var(--color-black);
  }
`;

export const CurrentSpeed = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  margin: 0 4px;
  position: relative;
  min-height: 32px;
  font-size: 1.4rem;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  color: var(--color-white);
  background-color: var(--color-blue);
  border-color: var(--color-blue);

  & > div {
    display: none;
  }
  &:hover {
    background-color: var(--color-blue-dark);
    border-color: var(--color-blue-dark);

    & > div {
      display: inline-flex;
    }
  }
  &:focus {
    outline: solid 1px var(--color-blue-dark);
  }
`;

export default {
  Btn,
  Video,
  Controls,
  InputRange
};
