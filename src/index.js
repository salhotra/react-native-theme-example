import React from "react";

import { ThemeContextProvider } from "./Theme/themeProvider";
import HomePage from "./HomPage";

export default App = () => (
  <ThemeContextProvider>
    <HomePage />
  </ThemeContextProvider>
);
