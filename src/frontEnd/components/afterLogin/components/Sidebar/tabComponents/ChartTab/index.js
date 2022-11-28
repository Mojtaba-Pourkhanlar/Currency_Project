import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../../../../../helpers";

export const ChartTab = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Spinner />
      <Typography>{t("coming")}</Typography>
    </div>
  );
};
