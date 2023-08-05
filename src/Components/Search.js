import * as React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

//multiline
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
      fontSize: "16px",
      borderRadius: "25px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
      borderRadius: "25px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
        borderRadius: "25px",
      },
      "&:hover fieldset": {
        borderColor: "black",
        borderRadius: "25px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray",
        borderRadius: "25px",
      },
    },
  },
})(TextField);
function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "70%" },
      }}
      noValidate
      autoComplete="off"
    >
      <CssTextField
        id="outlined-multiline-static"
        label="Job Description"
        multiline
        rows={4}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid black",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                    border: "1px solid black",
                  },
                }}
                variant="outlined"
                startIcon={<SearchIcon />}
              >
                find
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

//container
function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "white" }} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading black">
                <span className="black">Find</span> The Best Talents
              </h1>
              <MultilineTextFields />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

const Stats = () => {
  return (
    <section className="case-study">
      <SimpleContainer />
    </section>
  );
};
export default Stats;
