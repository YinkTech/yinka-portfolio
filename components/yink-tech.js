import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import Image from "next/image";

const YinkTech = () => {
  const refContainer = useRef();
  return (
    <Box
      ref={refContainer}
      className="yink-tech"
      m="auto"
      mt={["10px", "-60px", "10px"]}
      mb={["-90px", "-140px", "0px"]}
      w={[280, 280, 400]}
      h={[280, 280, 260]}
      position="relative"
    >
      <div id="tvscreen">
        <div id="container">
          <div id="monitor">
            <div id="monitorscreen">
              <Image fill src="/code.gif" alt="code dev" />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default YinkTech;
