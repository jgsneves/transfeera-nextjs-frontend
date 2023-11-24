import { PixKeyTypes } from "../constants/pix-key-types";
import { ReceiverStatus } from "../constants/receiver-status";

export interface Receiver {
  id: string;
  name: string;
  email: string;
  tax_id: string;
  branch: null | string;
  account: null | string;
  account_type: null | string;
  bank_name: null | string;
  bank_code: null | string;
  pix_key: string;
  pix_key_type: PixKeyTypes;
  status: ReceiverStatus;
  created_at: string;
  updated_at: string;
}
