import { INotat } from "../../sider/hjemmeside/hjemmeside";
import notatActionTypes from "../actionTypes/notatActionTypes";

interface IRequestFailedAction {
  type: notatActionTypes.REQUEST_FAILED;
  payload: string;
}

interface IRequestStartActionType {
  type: notatActionTypes.REQUEST_START;
}

interface IHentNotaterActionType {
  type: notatActionTypes.HENT_NOTATER;
  payload: INotat[];
}

interface ILeggTilNotatActionType {
  type: notatActionTypes.LEGG_TIL_NOTAT;
  payload: INotat;
}

interface ISlettNotatActionType {
  type: notatActionTypes.SLETT_NOTAT;
  payload: string;
}

export type INotatActionType =
  | IHentNotaterActionType
  | IRequestFailedAction
  | ILeggTilNotatActionType
  | ISlettNotatActionType
  | IRequestStartActionType;

export const requestStartAction = (): INotatActionType => ({
  type: notatActionTypes.REQUEST_START,
});

export const requestFailedAction = (error: string): IRequestFailedAction => ({
  type: notatActionTypes.REQUEST_FAILED,
  payload: error,
});

export const hentNotaterAction = (notater: INotat[]): INotatActionType => ({
  type: notatActionTypes.HENT_NOTATER,
  payload: notater,
});

export const leggTilNotatAction = (data: INotat): INotatActionType => ({
  type: notatActionTypes.LEGG_TIL_NOTAT,
  payload: data,
});

export const slettNotatAction = (id: string): INotatActionType => ({
  type: notatActionTypes.SLETT_NOTAT,
  payload: id,
});
