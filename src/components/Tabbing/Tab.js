import React from "react";
import Box from "../Box";

const Tab = ({ children, active }) => {
  return (
    <Box
      color="white"
      height="25px"
      width="fit-content"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding="10px"
      background={active ? "#1e1e1e" : "transparent"}
      borderRight="solid 1px rgb(29, 29, 29)"
      fontSize="10.5pt"
    >
      {children}
    </Box>
  );
};

export default Tab;
