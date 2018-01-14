const ACCESS_TOKEN =
  'bf3327a40c12d6c9026ec22d3db944b9962a1a18acdda7182ffb9eef5a0909c1';

const IS_DEV = process.env.NODE_ENV === 'development';

const API_BASE_URL = IS_DEV ? '' : 'http://api.dribbble.com/v1';

const BREAKPOINTS = {
  desktop: 1200,
  tablet: 600,
};

export { ACCESS_TOKEN, API_BASE_URL, BREAKPOINTS, IS_DEV };
