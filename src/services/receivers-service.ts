import axios, { AxiosInstance } from "axios";
import { PixKeyTypes } from "../constants/pix-key-types";
import { v4 as uuid } from "uuid";
import { Receiver } from "../models/receiver";
import { ReceiverStatus } from "../constants/receiver-status";
import { LoggerService } from "./logger-service";

interface CreateReceiverDto {
  name: string;
  tax_id: string;
  email: string;
  pix_key_type: PixKeyTypes;
  pix_key: string;
}

export interface GetReceiversResponse {
  receivers: Receiver[];
  total: number;
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

    return axios
      .post<Receiver>(`http://localhost:3004/receivers`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((error) => LoggerService.log(error));
  }

  public static getReceivers(path: string) {
    return axios
      .get(`http://localhost:3004/${path}`)
      .then<GetReceiversResponse>((res) => {
        return {
          receivers: res.data,
          total: res.headers["x-total-count"],
        };
      })
      .catch((error) => LoggerService.log(error));
  }

  public static getReceiverById(path: string) {
    return axios
      .get<Receiver>(`http://localhost:3004/${path}`)
      .then((res) => res.data)
      .catch((error) => LoggerService.log(error));
  }

  public static updateReceiver(id: string, data: Partial<Receiver>) {
    return axios
      .patch<Receiver>(`http://localhost:3004/receivers/${id}`, data)
      .then((res) => res.data)
      .catch((error) => LoggerService.log(error));
  }

  public static deleteReceiver(id: string) {
    return axios
      .delete(`http://localhost:3004/receivers/${id}`)
      .catch((error) => LoggerService.log(error));
  }
}
