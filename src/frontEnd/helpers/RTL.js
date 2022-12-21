import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export const RTL = ({ mode, children }) => {
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  if (mode === "fa") {
    return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
  } else {
    return <>{children}</>;
  }
};
