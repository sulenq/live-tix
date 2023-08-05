import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    p: {
      50: '#D0C3F7',
      100: '#AF9EE7',
      200: '#8E7ECF',
      300: '#6554AF',
      400: '#4C3D96',
      500: '#362A7D',
      600: '#281E6B',
      700: '#1D1559',
      800: '#130D48',
      900: '#0C083B',
    },
    e: {
      50: '#D0C3F7',
      100: '#AF9EE7',
      200: '#8E7ECF',
      300: '#6554AF',
      400: '#4C3D96',
      500: '#FC6035',
      600: '#281E6B',
      700: '#1D1559',
      800: '#130D48',
      900: '#0C083B',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18191b' : 'white',
      },
    }),
  },
  components: {
    Menu: {
      baseStyle: props => ({
        list: {
          bg: props.colorMode === 'dark' ? '#18191b' : 'white',
        },
        item: {
          bg: props.colorMode === 'dark' ? '#18191b' : 'white',
        },
      }),
    },
    Modal: {
      baseStyle: props => ({
        dialog: {
          bg: props.colorMode === 'dark' ? '#18191b' : 'white',
          transition: '100ms',
          // border: '1px solid var(--divider)',
        },
      }),
    },
    Drawer: {
      baseStyle: props => ({
        dialog: {
          bg: props.colorMode === 'dark' ? '#18191b' : 'white',
          transition: '100ms',
          // border: '1px solid var(--divider)',
        },
      }),
    },
    Button: {
      baseStyle: props => ({
        fontWeight: 600,
      }),
    },
  },
});
