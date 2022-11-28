import { createContext } from "react";

export const DasboardData = createContext({
    pageNumber: 0,
    handlePageNumber: () => {},
    drawerOpen: false,
    setDrawerOpen: () => {}
});
