import styled from './node_modules/~/pages/AddAviso/node_modules/styled-components';

import { Link } from './node_modules/~/pages/AddAviso/node_modules/react-router-dom';
import Button from '../../styles/components/button';

export const Header = styled.header`
  height: 168px;
  padding: 32px 0 0;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 3rem;
`;

export const NavItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin: 0 4px;
  height: 40px;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 40px;
  color: var(--color-white);
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &.active,
  &:hover {
    background-color: var(--color-white);
    border-color: var(--color-white);
    color: var(--brand-color-blue-dark);
    text-decoration: none;
  }

  & > .icon {
    font-size: 18px;
    margin-right: 8px;
  }
`;

export const BtnAdd = styled(Button)`
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 16px;
  border-radius: 15px;
  background-color: var(--color-white);
  border-color: var(--color-white);
  color: var(--brand-color-blue-dark);
  margin: 32px 0;
  font-weight: bold;

  & > .icon {
    font-size: 2.4rem;
    color: var(--brand-color-blue-dark);
  }
`;

export const LinkArchive = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  max-width: 360px;
  height: 40px;
  margin: 16px auto;

  background-color: var(--color-white);
  border-radius: 40px;
  font-size: 1.2rem;
  color: var(--brand-color-blue-dark);
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  text-align: center;
  font-weight: bold;

  &.active,
  &:hover {
    background-color: var(--color-white);
    border-color: var(--brand-color-blue-dark);
    color: var(--brand-color-blue-dark);
    text-decoration: none;
  }

  & > .icon {
    margin-right: 8px;
  }
`;

export default {
  NavItem,
  LinkArchive,
  BtnAdd,
};
