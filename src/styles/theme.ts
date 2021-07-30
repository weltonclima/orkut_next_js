import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      "100": "#F1F9FE",
      "200": "#D9E6F6",
      "300": "#6F92BB",
      "400": "#388BB0",
      "500": "#2E7BB4",
      "600": "#5579A1",
      "700": "#2F4A71",
    },
    gray: {
      "100": "#F4F4F4",
      "200": "#C5C6CA",
      "300": "#999999",
      "400": "#5A5A5A",
      "500": "#333333",
    }
  },
  styles: {
    global: {
      body: {
        bg: "blue.200",
        color:"gray.500"
      }
    }
  },
  fonts:{
    heading: 'Rubik',
    body: 'Rubik',
  }
})
