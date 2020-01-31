import styled from 'styled-components';
import Collapse from 'react-bootstrap/Collapse';
import Button from '../../styles/components/button';

export const Container = styled.article`
  width: 100%;
  max-width: 360px;
  min-height: 236px;
  background-color: #ffffff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 16px;
`;

export const Cover = styled.img``;

export const Header = styled.div`
  padding: 32px 16px 0;
`;

export const Tag = styled.div`
  width: 100%;
  position: relative;
  color: var(--brand-color-blue-dark);
  opacity: 1;
  font-size: 1.1rem;
  font-weight: bold;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    max-width: 65px;
    height: 6px;
    top: -16px;
    background-color: #c1da1e;
    border-radius: 10px;
  }
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: var(--brand-color-blue-dark);
`;

export const CardCollapse = styled(Collapse)`
  padding: 16px;
`;

export const Info = styled.p`
  color: var(--brand-color-blue-dark);
`;

export const Owner = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--brand-color-blue-dark);

  & > .icon {
    margin-right: 8px;
  }
`;

export const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  width: calc(100% - 32px);
  margin: 0 auto;
  color: var(--color-white);
  background-color: var(--brand-color-blue-dark);
  border-radius: 16px;
`;

export const Actions = styled.div``;

export const ActionsBtn = styled(Button)``;
