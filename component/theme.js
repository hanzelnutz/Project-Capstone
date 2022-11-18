import { extendTheme } from "@chakra-ui/react"
import React from 'react'

const MyTheme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bgColor: '#343742',
            },
        }),
    },
    fonts: {
      body : `'Montserrat', sans-serif`,
    },
})

export default MyTheme