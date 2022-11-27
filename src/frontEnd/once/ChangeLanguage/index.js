import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import i18next from "i18next";
import cookies from "js-cookie";
import iran from "../../assets/images/icons/iran.svg";
import english from "../../assets/images/icons/english.svg";

const languages = [
  {
    code: "fa",
    name: "persion",
    dir: "rtl",
    country_code: "fa",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const countryLanguages = [
  {
    id: 1,
    name: "English",
    value: "en",
    icon: english,
  },
  {
    id: 2,
    name: "فارسی",
    value: "fa",
    icon: iran,
  },
];

export const Language = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Change-Language");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  const demo = {
    "& .MuiSelect-select": {
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    "& svg": {
      color: "#fff",
    },
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          sx={demo}
          value={i18n.language}
          onChange={(e) => {
            i18next.changeLanguage(e.target.value);
          }}>
          {countryLanguages.map((item) => (
            <MenuItem
              key={item.id}
              value={item.value}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={item.icon} alt={item.name} />
              <Typography variant="h5">{item.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
