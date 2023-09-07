import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./../components/layouts/main";
import theme from "./../lib/theme";
import Fonts from "./fonts";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./cursor.css";
import { useEffect } from "react";

const Website = ({ Component, pageProps, router }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100); 
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
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
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
