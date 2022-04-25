import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProductContextProvider } from '../context/ProductContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductContextProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <div className="main">  
          <Component {...pageProps} />
        </div>
        <Footer />
      </ChakraProvider>
    </ProductContextProvider>
  )
}

export default MyApp
