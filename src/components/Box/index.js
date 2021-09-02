import React, { forwardRef } from "react";
import useDeclarativeStyles from "../../hooks/useDeclarativeStyles";

const Box = forwardRef(({ children, ...restProps }, ref) => {
	const [styles, rest] = useDeclarativeStyles(restProps);
  return <div {...rest} ref={ref} style={styles}>{children}</div>;
});

export default Box;
