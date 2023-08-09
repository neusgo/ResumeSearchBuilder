import "../assets/styles/style_help.css";
import React, { useState } from 'react';
import TalentBox from "../Components/TalentBox";
import Search from "../Components/Search";
import { Link } from "react-router-dom";
import { CardContent, Card, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { help_cards, faqs } from "../constant";


const Talents = () => {
  const talentIds = [1, 2, 3, 4, 5];
  //const [id, setId] = useState(8); // Initial id
  return (
    <>
     {talentIds.map(id => (
          <Card class="talent">
            <CardContent>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography variant="body2">
                  <TalentBox id={id} />
              </Typography>
            </CardContent>
          </Card>
      ))}
    </>
  );
};



export default Talents;
