import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { konsulentActionCreators } from "../../redux";
import { RootState } from "../../redux/reducers";

export interface IKonsulent {
  id: string;
  navn: string;
  alder: number;
  epost: string;
}

const Hjemmeside: React.FC = () => {
  const [navn, settNavn] = React.useState<string>("");
  const [alder, settAlder] = React.useState<number>(0);
  const [epost, settEpost] = React.useState<string>("");

  const { konsulenter, loading, error } = useSelector(
    (state: RootState) => state.konsulenter
  );
  console.log(konsulenter);

  const dispatch = useDispatch();
  const { hentKonsulenter, leggTilKonsulent, slettKonsulent } =
    bindActionCreators(konsulentActionCreators, dispatch);

  return (
    <div>
      <h1>Redux demo</h1>

      <input
        type="navn"
        placeholder="Konsulent navn"
        onChange={(e) => settNavn(e.target.value)}
      />
      <input
        type="number"
        placeholder="alder"
        onChange={(e) => settAlder(parseInt(e.target.value))}
      />
      <input
        type="epost"
        placeholder="epost"
        onChange={(e) => settEpost(e.target.value)}
      />

      <button onClick={() => leggTilKonsulent({ navn, alder, epost })}>
        Legg til konsulent
      </button>

      {konsulenter.map((konsulent: IKonsulent) => (
        <div key={konsulent.id}>
          <b>post: {konsulent.id}</b>
          <span>{JSON.stringify(konsulent)}</span>
          <button onClick={() => slettKonsulent(konsulent.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Hjemmeside;
