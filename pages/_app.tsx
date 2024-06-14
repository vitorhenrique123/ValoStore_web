import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

export const runtime = "edge";

function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default App;
