import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    p: {
      50: '#D0C3F7', // 6
      100: '#AF9EE7', // 5
      200: '#8E7ECF', // 4
      300: '#6554AF', // 3
      400: '#4C3D96', // 2
      500: '#362A7D', // 1
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
    dark: '#18191b',
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
          // transition: '100ms',
          // border: '1px solid var(--divider)',
        },
      }),
    },
    Drawer: {
      baseStyle: props => ({
        dialog: {
          bg: props.colorMode === 'dark' ? '#18191b' : 'white',
          // transition: '100ms',
          // border: '1px solid var(--divider)',
        },
      }),
    },
    Button: {
      baseStyle: props => ({
        fontWeight: 600,
        borderRadius: '8px',
      }),
    },
  },
});
