import { App } from "../src/components/App";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";

import React from "react";

function HomePage() {
  const [theme, setTheme] = React.useState<"dark" | "light">("light");

  return (
    <StyleProvider>
      <ThemePicker variant={theme}>
        <React.StrictMode>
          <App
            onToggleTheme={(isDark) => setTheme(isDark ? "dark" : "light")}
          />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
