import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const FloatingActionButtonExtendedSize = ({ buttonText }) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" color="black" aria-label="add" font-color="white">
      {buttonText}
      </Fab>
    </Box>
  );
};
export default FloatingActionButtonExtendedSize;
