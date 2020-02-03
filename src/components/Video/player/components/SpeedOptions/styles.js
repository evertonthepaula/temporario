import styled from 'styled-components';

export const ListOptions = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding: 2px 0;
  margin: 2px 0;
  position: absolute;
  left: 0;
  bottom: 100%;
  border-radius: var(--border-radius);
  color: var(--color-white);
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
`;

export const Option = styled.span`
  position: relative;
  margin: 0 0 8px;
  height: 24px;
  line-height: 24px;

  background: ${props =>
    props.current.toString() === props.label ? 'var(--color-blue-dark)' : ''};

  &:before {
    content: attr(label);
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: var(--font-micro);
    color: var(--color-black);
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export default {
  Option,
  ListOptions,
};
