import React from "react";
import Providers from "./Providers";
import "./globals.css";



export const metadata = {
  title: "Movie",
};
const layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default layout;
