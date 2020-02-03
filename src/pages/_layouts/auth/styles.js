import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(#0061a2, #3bb1ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 8px;
  background: #fff;
  text-align: center;
  border-radius: 24px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    strong {
      text-align: left !important;
      margin-top: 20px;
      margin-left: 30px;
      line-height: 19px;
    }

    input {
      margin: 5px 30px 0 30px;
      background-color: #ffffff;
      border: solid 1px #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;

      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 5px 0 0 30px;
    }

    button {
      margin: 30px 30px 50px 30px;
      height: 45px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background-color: #0061a2;
      border-radius: 4px;
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background-color: #0a6fb2;
      }
    }
  }
`;
