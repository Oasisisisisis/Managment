// theme.js
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// 色彩盤
const colors = {
  gray: {
    900: '#262626',
    800: '#323232',
    700: '#434343',
    600: '#595959',
    500: '#8c8c8c',
    400: '#BFBFBF',
    300: '#d9d9d9',
    200: '#f0f0f0',
    100: '#f5f5f5',
    50: '#fafafa'
  }
};

// 主題顏色
const styles = {
  global: {
    body: {
      bg: 'gray.900',     // 設定背景為深灰
      color: 'gray.50',   // 設定文字顏色為淺灰/白
    },
  },
};


const customTheme = extendTheme(
  {
    colors,
    styles
  },
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Button'], // 指定哪些元件使用預設色系
  })
);

export default customTheme;
