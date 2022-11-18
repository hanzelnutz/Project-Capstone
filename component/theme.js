import { extendTheme } from "@chakra-ui/react"
import React from 'react'

const MyTheme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bgColor: '#4A525A',
            },
        }),
    },
    fonts: {
      body : `'Montserrat', sans-serif`,
    },
})

export default MyTheme