// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      500: "#2b6cb0", // 主色
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "xl",
      },
    },
  },
});

export default customTheme;
