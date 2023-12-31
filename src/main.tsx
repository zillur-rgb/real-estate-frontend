import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./styles/theme.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
);
