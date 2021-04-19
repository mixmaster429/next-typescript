import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@styles/main.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import theme from "@definitions/chakra/theme";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Component {...pageProps} />
          </DndProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
