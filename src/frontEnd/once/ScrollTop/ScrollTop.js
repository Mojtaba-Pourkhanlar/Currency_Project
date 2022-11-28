import { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        zIndex: "1000",
      }}>
      <div>
        <div
          style={{ height: "2px", background: "#f3d02c", width: `${scroll}%` }}
          id="myBar"></div>
      </div>
    </div>
  );
};
