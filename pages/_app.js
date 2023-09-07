import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./../components/layouts/main";
import theme from "./../lib/theme";
import Fonts from "./fonts";
import { AnimatePresence } from "framer-motion";
import "./cursor.css";
import ErrorBoundary from "../components/ErrorBoundary";

const Website = ({ Component, pageProps, router }) => {
  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <ErrorBoundary>
            <Component {...pageProps} key={router.route} />
          </ErrorBoundary>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
