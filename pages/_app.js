import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/montserrat"
import MyTheme from "../component/theme"


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={MyTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
