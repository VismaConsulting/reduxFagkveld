import { IKonsulent } from "./../../sider/hjemmeside/hjemmeside";
import axios from "axios";
import { Dispatch } from "react";
import {
  hentKonsulenterAction,
  IKonsulenterActionType,
  leggTilKonsulentAction,
  requestFailedAction,
  requestStartAction,
  slettKonsulentAction,
} from "../actions/konsulenterActions";

interface IHentKonsulenterQueryResponse {
  data: IKonsulent[];
}

interface ILeggTilKonsulentQueryReponse {
  data: IKonsulent;
}

interface ISlettKonsulentQueryResponse {
  data: IKonsulent;
}

export const hentKonsulenter =
  () => async (dispatch: Dispatch<IKonsulenterActionType>) => {
    dispatch(requestStartAction());
    axios
      .get("/api/konsulenter")
      .then((response: IHentKonsulenterQueryResponse) => {
        console.log(response);
        dispatch(hentKonsulenterAction(response.data));
      })
      .catch((error: any) => {
        dispatch(requestFailedAction(error.message));
      });
  };

interface ILeggTilKonsulentProps {
  navn: string;
  alder: number;
  epost: string;
}
export const leggTilKonsulent =
  (konsulent: ILeggTilKonsulentProps) =>
  async (dispatch: Dispatch<IKonsulenterActionType>) => {
    axios
      .post("/api/konsulenter", { konsulent })
      .then((response: ILeggTilKonsulentQueryReponse) => {
        dispatch(leggTilKonsulentAction(response.data));
      });
  };

export const slettKonsulent =
  (id: string) => async (dispatch: Dispatch<IKonsulenterActionType>) => {
    axios
      .delete("/api/konsulenter", { data: { id } })
      .then((response: ISlettKonsulentQueryResponse) => {
        dispatch(slettKonsulentAction(response.data.id));
      });
  };
