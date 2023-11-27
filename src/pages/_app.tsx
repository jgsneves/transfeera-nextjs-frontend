import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { FilterReceiverCtxProvider } from "../contexts/filter-receiver-context";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FilterReceiverCtxProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </FilterReceiverCtxProvider>
    </ThemeProvider>
  );
}
