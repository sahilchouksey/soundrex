import {Fragment, useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import MyButton from "../Button/Button";

import styles from "./Popup.module.scss";
import Spinner from "../Loading/Spinner";

// import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = props => {
  const {children, onClose, ...other} = props;

  return (
    <DialogTitle sx={{m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Popup({
  closedContent,
  title,
  content,
  onSavebutton,
  onSaveButtonLoading,
  onClick,
  notCloseable = false,
  autoClose = false,
  triggerContent,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (notCloseable) {
      handleClickOpen();
    }
    if (autoClose) {
      handleClose();
    }
  }, [notCloseable, autoClose]);

  return (
    <div className={triggerContent && "full-hw "}>
      {triggerContent && (
        <div className={triggerContent && "full-hw"} onClick={handleClickOpen}>
          {triggerContent}
        </div>
      )}
      {!triggerContent && !notCloseable && (
        <Button
          // variant="outlined"
          onClick={handleClickOpen}
          className={` ${styles["popup-click-btn"]}`}>
          {closedContent}
        </Button>
      )}

      <BootstrapDialog
        // theme={"dark"}
        className={` ${styles["popup-box"]}`}
        onClose={!notCloseable ? handleClose : () => {}}
        aria-labelledby="customized-dialog-title"
        open={open}>
        {!notCloseable && (
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={!notCloseable ? handleClose : () => {}}
            className="display-small--bold">
            {title && title}
          </BootstrapDialogTitle>
        )}

        <DialogContent dividers className={triggerContent && "mg-b-10"}>
          {content}
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          {/* <Actions onClick={!notCloseable && handleClose} /> */}
          {!triggerContent && !notCloseable && (
            <Fragment>
              <MyButton
                onClick={!notCloseable ? handleClose : () => {}}
                className={`link-medium ${styles["popup-btn"]} ${styles["popup-btn-cancel"]}`}>
                Cancel
              </MyButton>

              <MyButton
                disabled={onSaveButtonLoading}
                // autoFocus
                onClick={onClick ? onClick : () => {}}
                className={`link-medium ${styles["popup-btn"]} ${styles["popup-btn-success"]}`}>
                {onSaveButtonLoading && <Spinner className="mg-r-1" />}
                {onSavebutton && onSavebutton}
              </MyButton>
            </Fragment>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
