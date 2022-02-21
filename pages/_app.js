// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import { theme } from "../src/styles/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet" />
    
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}