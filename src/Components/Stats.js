import Counter from "./UI/Counter";
import Box from "@mui/material/Box";

import { stats } from "../constant";

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        {stats.map((stat) => (
          <Box
            key={stat.id}
            component="div"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
          >
            <div className="col-md-4 text-center stat-box">
              <Counter limit={stat.value} />
              <h3>{stat.title}</h3>
            </div>
          </Box>
        ))}
      </div>
    </section>
  );
};
export default Stats;
