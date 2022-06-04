import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import style from "./Sidebar.module.css";
import {
  PhoneIcon,
  UnlockIcon,
  TimeIcon,
  SpinnerIcon,
  ViewIcon,
} from "@chakra-ui/icons";

// verbose

const Sidebar = () => {
  return (
    <Flex>
      <Box width="20%" height="600px" backgroundColor="white">
        <Box m="20px">
          <h1>Logo</h1>
        </Box>
        <Flex direction="column" p="40px" className={style.items}>
          <Box>
            <h2>
              <PhoneIcon />
              Home
            </h2>
          </Box>
          <Box>
            <h2>
              <UnlockIcon />
              Trending
            </h2>
          </Box>
          <Box>
            <h2>
              <TimeIcon />
              Explore
            </h2>
          </Box>
          <Box>
            <h2>
              <SpinnerIcon />
              Favourite
            </h2>
          </Box>
          <Box>
            <h2>
              <ViewIcon />
              Settings
            </h2>
          </Box>
        </Flex>
      </Box>
      <Box width="80%" height="600px" backgroundColor="gray"></Box>
    </Flex>
  );
};

export default Sidebar;
