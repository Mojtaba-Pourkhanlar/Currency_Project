import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  document.body.dir = i18n.dir();

  i18n.changeLanguage();
  document.body.dir = i18n.dir();
  theme.direction = i18n.dir();

  return (
    <div>
      <select
        style={{
          background: "#121519",
          cursor: "pointer",
          color: "rgba(255, 255, 255, .9)",
          border: "none",
        }}
        value={i18n.language}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}>
        <option value="fa">فارسی</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
