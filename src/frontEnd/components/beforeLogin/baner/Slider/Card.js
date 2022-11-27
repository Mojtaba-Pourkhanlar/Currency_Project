import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";



const Card = ({ image, title, price, market }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
      }}>
      <img src={image} width="80" alt="Product" style={{ marginBottom: 10 }} />

      <Box sx={{ display: "flex" }}>
        <Typography variant="h4" sx={{ color: "#fff" , mr:'10px'}}>
          {t(`${title}`)}
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontWeight: 500, color: price > 0 ? "#00cc00" : "#ff2626" }}>
          {price}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3" sx={{ color: "#fff" }}>
          ${market}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
