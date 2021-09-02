import React from "react";
import Box from "../Box";

const Tabs = ({ children }) => {
  return (
    <Box
      display="flex"
      width="100%"
      background="rgb(36, 36, 36)"
      borderBottom="solid 1px rgb(29, 29, 29)"
    >
      {children}
    </Box>
  );
};

export default Tabs;
