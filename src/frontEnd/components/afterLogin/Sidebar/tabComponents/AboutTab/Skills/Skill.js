import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const Skill = ({ icon, color, name, value }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 3,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor: color,
    },
  }));

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", my: "20px" }}>
        <Box sx={{ minWidth: 35, mx: 1 }}>
          <Typography variant="h6">{Math.round(value)}%</Typography>
        </Box>
        <Box sx={{ width: "100%", mx: 1 }}>
          <BorderLinearProgress variant="determinate" value={value} />
        </Box>
        <Box mx={2}>
          <img src={icon} alt={name} width="100px" />
        </Box>
      </Box>
    </>
  );
};

export default Skill;