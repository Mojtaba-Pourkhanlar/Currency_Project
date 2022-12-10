import { useEffect, useState } from "react";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import { useTheme } from "@mui/material";
import CS from "./BackTop.module.css";

export const BackTop = () => {
  const theme = useTheme();

  //..............Scroll Top
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //..............End

  return (
    <div className={CS.container}>
      {showButton && (
        <NorthOutlinedIcon
          onClick={scrollToTop}
          className={CS.backToTop}
          style={{
            background: theme.palette.mode === "dark" ? "#f3d02c" : "#084430",
            color: theme.palette.mode === "dark" ? "#191a1b" : "#fff",
            transition: "all 0.50s linear",
            zIndex: 100,
          }}
        />
      )}
    </div>
  );
};
