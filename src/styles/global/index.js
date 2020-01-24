import { createGlobalStyle } from 'styled-components';

import settings from './settings';
import normalize from './normalize';
import typography from './typography';

export default createGlobalStyle`
  ${settings}
  ${normalize}
  ${typography}
`;
