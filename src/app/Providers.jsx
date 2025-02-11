import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Header/>
      <Tabs/>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
