import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LinkItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin: 0 4px;
  height: 40px;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 40px;
  font-size: var(--font-mini);
  font-family: 'PT Sans', sans-serif;
  color: var(--brand-color-blue-dark);
  text-decoration: none;
  box-sizing: border-box;

  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &.active,
  &:hover {
    background-color: var(--color-white);
    border-color: var(--brand-color-blue-dark);
    color: var(--brand-color-blue-dark);
    text-decoration: none;
  }
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

export default {
  LinkItem,
  Icon,
};
