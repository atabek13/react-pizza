import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

import { TDialog } from './types';
import './dialog.scss';

const DialogComponent: React.FC<TDialog> = ({
  dialogTitle,
  dialogContent,
  dialogShow,
  onCloseDialog,
  onClear,
}) => {
  return (
    <div className="dialog">
      <Dialog
        open={dialogShow}
        onClose={onCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog}>Отмена</Button>
          <Button onClick={onClear} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
