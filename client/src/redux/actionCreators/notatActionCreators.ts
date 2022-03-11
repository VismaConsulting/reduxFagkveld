import axios from "axios";
import { Dispatch } from "react";
import { INotat } from "../../sider/hjemmeside/hjemmeside";
import {
  leggTilNotatAction,
  hentNotaterAction,
  slettNotatAction,
  INotatActionType,
  requestStartAction,
  requestFailedAction,
} from "./../actions/notatActions";

interface IHentNotaterQueryReponse {
  data: INotat[];
}

interface ILeggTilNotatQueryReponse {
  data: INotat;
}

interface ISlettNotatQueryReponse {
  data: INotat;
}

export const hentNotater =
  () => async (dispatch: Dispatch<INotatActionType>) => {
    dispatch(requestStartAction());
    axios
      .get("/api/posts")
      .then((response: IHentNotaterQueryReponse) => {
        console.log(response);
        dispatch(hentNotaterAction(response.data));
      })
      .catch((error: any) => {
        dispatch(requestFailedAction(error.message));
      });
  };

export const leggTIlNotat =
  (tekst: string) => async (dispatch: Dispatch<INotatActionType>) => {
    axios
      .post("/api/posts", {
        text: tekst,
      })
      .then((response: ILeggTilNotatQueryReponse) => {
        dispatch(leggTilNotatAction(response.data));
      });
  };

export const slettNotat =
  (id: string) => async (dispatch: Dispatch<INotatActionType>) => {
    axios
      .delete("/api/posts", { data: { id } })
      .then((response: ISlettNotatQueryReponse) => {
        dispatch(slettNotatAction(response.data.id));
      });
  };
