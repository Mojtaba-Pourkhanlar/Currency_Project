import { Box, Button, Modal } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalTrue = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box>{children}</Box>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            {t("ok")}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
