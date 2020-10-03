import React from 'react'

//@material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
//@material-ui/icons 
import { Close } from '@material-ui/icons';
//core components
import Button from "../CustomButtons/Button";

import styles from '../../assets/js/components/modalStyle'

const useStyles = makeStyles(styles)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
})

Transition.displayName = "Transition"
export default function Modal(props) {
  const classes = useStyles()
  const { title, content, open, setOpen, buttonAction } = props
  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => setOpen(false)}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h2 className={classes.modalTitle}>{title}</h2>
      </DialogTitle>
      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        {content}
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button color="transparent" simple>
          {buttonAction}
        </Button>
      </DialogActions>
    </Dialog>
  )
}