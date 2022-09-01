import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from '../components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00296b'
    },
    secondary: {
      main: '#dcdcdc'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      color: '#00296b',
      minWidth: '60px',
      textAlign: 'center',
      fontWeight: '600'
    }
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp