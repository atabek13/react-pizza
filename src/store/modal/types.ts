import { Status, TPizzaObj } from '../pizza/types';

export interface IModalState {
  modalPizzas: TPizzaObj | null;
  modalStatus: Status;
  modalId: string;
  modalShow: boolean;
}
