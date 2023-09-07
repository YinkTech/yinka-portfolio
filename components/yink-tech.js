import { Box } from "@chakra-ui/react";
import { useRef } from "react";

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
              <img
                alt="code dev"
                src="/code.gif"
                style={{ width: "400px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default YinkTech;
