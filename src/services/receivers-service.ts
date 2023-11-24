import axios from "axios";
import { PixKeyTypes } from "../constants/pix-key-types";
import { v4 as uuid } from "uuid";
import { Receiver } from "../models/receiver";
import { ReceiverStatus } from "../constants/receiver-status";

interface CreateReceiverDto {
  name: string;
  tax_id: string;
  email: string;
  pix_key_type: PixKeyTypes;
  pix_key: string;
}

export class ReceiversService {
  public static createReceiver(createReceiverDto: CreateReceiverDto) {
    const currentDateIsoString = new Date().toISOString();

    const data: Receiver = {
      ...createReceiverDto,
      id: uuid(),
      created_at: currentDateIsoString,
      updated_at: currentDateIsoString,
      status: ReceiverStatus.RASCUNHO,
      account: null,
      account_type: null,
      bank_code: null,
      bank_name: null,
      branch: null,
    };

    return axios.post<Receiver>("http://localhost:3004/receivers", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
