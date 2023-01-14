export type TDialog = {
  dialogTitle: string;
  dialogContent: string;
  dialogShow: boolean;
  onCloseDialog: () => void;
  onClear: () => void;
};
