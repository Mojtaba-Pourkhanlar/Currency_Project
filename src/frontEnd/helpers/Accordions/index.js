import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordions = ({ id, title, children }) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === `${id}`}
        onChange={handleChange(`${id}`)}
        sx={{ backgroundColor: "#121519", width: "250px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#e6e7e7" }} />}
          aria-controls={`${id} + "bh-content"`}
          id={`${id} + "bh-header"`}>
          <Typography sx={{ width: "100%", flexShrink: 0, color: "#e6e7e7" }}>
            {t(`${title}`)}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ color: "#818385" }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
