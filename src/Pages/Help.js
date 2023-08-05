import "../assets/styles/style_help.css";
import React from "react";
import { Link } from "react-router-dom";
import { CardContent, Card,Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { help_cards, faqs } from "../constant";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Help = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div>
        <h1 className="help-title">Welcome! How can we help?</h1>
      </div>
      <div style={{ padding: "30px 20px" }}>
        <Grid container spacing={6}>
          {help_cards.map((comment) => (
            <Grid item xs={12} md={4}>
              <Card key={comment.id} style={{ height: "300px" }}>
                <CardContent>
                  <div class="swiper-slide testimonial-box black">
                    <div class="text-right">
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={comment.src}
                          sx={{ width: 90, height: 90 }}
                        ></Avatar>
                      </Box>
                    </div>
                    <h2>{comment.title}</h2>
                    <p>{comment.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ padding: "30px 20px" }}>
        {faqs.map((faq) => (
          <Accordion
            expanded={expanded === faq.panelName}
            onChange={handleChange(faq.panelName)}
          >
            <AccordionSummary aria-controls={faq.panelContent} id={faq.panelId}>
              <Typography>{faq.panelTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.panelDescription}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        <h2>
          <strong style={{ color: "#000" }}>
            Can't find what you're looking for?
          </strong>
        </h2>
        <h3 style={{ color: "#666" }}>
          Reach out with questions or feedback any time!
        </h3>
        <Link to="/contact">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#000",
              border: "2px solid #000",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (
              (e.target.style.backgroundColor = "#000"),
              (e.target.style.color = "#fff")
            )}
            onMouseLeave={(e) => (
              (e.target.style.backgroundColor = "transparent"),
              (e.target.style.color = "#000")
            )}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Help;
