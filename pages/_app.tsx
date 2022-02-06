import React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Layout from "../src/components/Layout/Layout";
import "../public/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const [pageTheme, setPageTheme] = React.useState<"dark" | "light">("light");

  return (
    <StyleProvider>
      <ThemePicker variant={pageTheme}>
        <React.StrictMode>
          <Layout
            onToggleTheme={(isDark) => setPageTheme(isDark ? "dark" : "light")}
          >
            <Component {...pageProps} />
          </Layout>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}
