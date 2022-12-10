import { Box } from "@mui/material";
import login from "frontEnd/assets/images/login.svg";

const ImageContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'100%'
      }}>
      <Box sx={{width:{
        md:"100%",
        lg:'80%'
        }
      }}>
        <img src={login} alt="loginSVG" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default ImageContainer;
