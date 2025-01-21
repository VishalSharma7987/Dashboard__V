/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
const AccordionItem = ({title, details , links }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Accordion defaultExpanded sx={{ bgcolor: `${colors.primary[400]}` }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
        <Typography>{links}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
