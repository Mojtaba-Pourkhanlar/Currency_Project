import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const ReadMoreLess = ({ limit, children }) => {
  const { t } = useTranslation();

  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          padding: "20px 20px 10px",
          opacity: "0.9",
        }}>
        {isReadMore ? text.slice(0, limit) : text}
        <br />
        <Box align="center">
          {isReadMore ? (
            <Button
              onClick={toggleReadMore}
              variant="text"
              startIcon={<KeyboardArrowDown />}
              color="secondary">
              {t("readMore")}
            </Button>
          ) : (
            <Button
              onClick={toggleReadMore}
              variant="text"
              startIcon={<KeyboardArrowUp />}
              color="secondary">
              {t("readLess")}
            </Button>
          )}
        </Box>
      </Typography>
    </>
  );
};
