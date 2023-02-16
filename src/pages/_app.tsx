import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../shared/components/Layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "../shared/theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
