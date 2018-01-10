import 'font-awesome/css/font-awesome.css';
import { BREAKPOINTS } from '../../Constants';
import './reset.css';
import './index.css';

export const getTheme = () => ({
  breakpoints: {
    tablet: `min-width: ${BREAKPOINTS.tablet}px`,
    desktop: `min-width: ${BREAKPOINTS.desktop}px`,
  },
});
