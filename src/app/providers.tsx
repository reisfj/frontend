'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const openSans = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  
}

const theme = extendTheme({
  fonts: {
    heading: openSans.fontFamily,
    body: openSans.fontFamily,
  },
  colors: {
    custom: {
      onSecundary: ' #ffffff',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
