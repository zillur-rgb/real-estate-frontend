import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#2F54E9",
    800: "#242424",
    700: "#888",
  },
};

const fonts = {
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
};

export const chakraTheme = extendTheme({ colors, fonts });
