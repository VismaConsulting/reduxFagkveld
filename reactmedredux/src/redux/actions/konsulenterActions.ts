import { IKonsulent } from "../../sider/hjemmeside/hjemmeside";
import konsulenterActionTypes from "../actionTypes/konsulenterActionTypes";

interface IRequestFailedAction {
  type: konsulenterActionTypes.REQUEST_FAILED;
  payload: string;
}

interface IRequestStartActionType {
  type: konsulenterActionTypes.REQUEST_START;
}

interface IHentKonsulenterActionType {
  type: konsulenterActionTypes.HENT_KONSULENTER_SUCCESS;
  payload: IKonsulent[];
}

interface ILeggTilKonsulentActionType {
  type: konsulenterActionTypes.LEGG_TIL_KONSULENT_SUCCESS;
  payload: IKonsulent;
}

interface ISlettKonsulentActionType {
  type: konsulenterActionTypes.SLETT_KONSULENT_SUCCESS;
  payload: string;
}

export type IKonsulenterActionType =
  | IRequestFailedAction
  | IRequestStartActionType
  | IHentKonsulenterActionType
  | ILeggTilKonsulentActionType
  | ISlettKonsulentActionType;

export const requestStartAction = (): IKonsulenterActionType => ({
  type: konsulenterActionTypes.REQUEST_START,
});

export const requestFailedAction = (error: string): IRequestFailedAction => ({
  type: konsulenterActionTypes.REQUEST_FAILED,
  payload: error,
});

export const hentKonsulenterAction = (
  notater: IKonsulent[]
): IKonsulenterActionType => ({
  type: konsulenterActionTypes.HENT_KONSULENTER_SUCCESS,
  payload: notater,
});

export const leggTilKonsulentAction = (
  data: IKonsulent
): IKonsulenterActionType => ({
  type: konsulenterActionTypes.LEGG_TIL_KONSULENT_SUCCESS,
  payload: data,
});

export const slettKonsulentAction = (id: string): IKonsulenterActionType => ({
  type: konsulenterActionTypes.SLETT_KONSULENT_SUCCESS,
  payload: id,
});
