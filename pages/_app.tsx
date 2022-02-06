import React from "react";
import App from "../src/components/App";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Layout from "../src/components/Page/Page";
import "../public/css/styles.css";

function Root() {
  const [pageTheme, setPageTheme] = React.useState<"dark" | "light">("light");

  return (
    <StyleProvider>
      <ThemePicker variant={pageTheme}>
        <React.StrictMode>
          <Layout
            onToggleTheme={(isDark) => setPageTheme(isDark ? "dark" : "light")}
          >
            <App />
          </Layout>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default Root;
