export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.8rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      huge: '5.2rem',
    },
  },
  colors: {
    white: '#FFFFFF',
    background: '#E5E5E5',
    darkBlue: '#071C33',
    black: '#000',
    menu: '#BBBBBB',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  dark: {
    primary: '#1B1F38',
    secondary: '#252A48',
    tertiary: '#313862',

    white: '#FFF',
    black: '#000',
    gray: '#BFBFBF',

    success: '#4E41F0',
    info: '#F7931B',
    warning: '#E44C4E',
  },
  light: {
    primary: '#E5E5E5',
    secondary: '#FFFFFF',
    tertiary: '#F5F5F5',

    white: '#000',
    black: '#FFF',
    gray: '#BFBFBF',

    success: '#03BB85',
    info: '#3B5998',
    warning: '#FF6961',
  },
} as const;
