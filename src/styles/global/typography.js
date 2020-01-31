import { css } from 'styled-components';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap');

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 100%;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  .title {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    color: var(--title-color-primary);
    font-size: var(--font-Xlarge);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h2,
  .subtitle {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    color: var(--title-color-primary);
    font-weight: bold;
    font-size: var(--font-large);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h3,
  .title-medium {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    color: var(--title-color-primary);
    font-size: var(--font-medium);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h4,
  .title-small {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    color: var(--title-color-primary);
    font-size: var(--font-small);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p,
  .text {
    display: block;
    width: 100%;
    color: var(--text-color-primary);
    font-size: var(--font-mini);
  }

  small {
    font-size: 100%;
  }

  a {
    color: var(--color-blue);
    font-size: var(--font-mini);
    line-height: 32px;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: var(--color-blue-dark);
      text-decoration: none;
    }
  }
`;
