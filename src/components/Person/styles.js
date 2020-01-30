import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: baseline;
  width: 100%;
  max-width: 400px;
  min-height: 128px;
  padding: 16px;
  margin: 16px;
  background-color: var(--color-white);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const CardImage = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: baseline;
  width: 50%;
  flex: 1 0 50%;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: baseline;
  width: 50%;
  flex: 1 0 50%;
  font-size: 3rem;
`;

export const Info = styled.span`
  margin: 0;
  color: var(--color-dark-smoke);
  font-size: 1.4rem;
`;

export default {
  Card,
  Info
};
