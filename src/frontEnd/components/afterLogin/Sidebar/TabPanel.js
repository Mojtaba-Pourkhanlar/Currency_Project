import { Box } from "@mui/material";

export const TabPanel = (props) => {
  const { children, value, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};
