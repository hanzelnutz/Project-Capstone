import { extendTheme } from "@chakra-ui/react"
import React from 'react'

const MyTheme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bgGradient: 'linear(to-l, #95e7f7,#cda3f0)',
            },
        }),
    },
    fonts: {
      body : `'Montserrat', sans-serif`,
    },
})

export default MyTheme