import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { withStyles } from "@material-ui/styles";

const GreenTextTypography = withStyles({
  root: {
    color: "#000000",
  },
})(Typography);

const Counter = ({ limit }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < limit) {
      const id = setTimeout(() => setCount(count + 5), 1); // Increment by 5 every millisecond
      return () => clearTimeout(id);
    }
  }, [count, limit]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: { duration: 500 },
  });

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + "k" : count;
  };

  return (
    <div>
      <animated.div style={props}>
        <GreenTextTypography variant="h1">
          {formatCount(count)}
        </GreenTextTypography>
      </animated.div>
    </div>
  );
};
export default Counter;
