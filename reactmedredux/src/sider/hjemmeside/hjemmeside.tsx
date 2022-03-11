import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { notatActionCreators } from "../../redux";
import { RootState } from "../../redux/reducers";

export interface IVareProps {
  id: string;
  beskrivelse: string;
  pris: number;
}

const Hjemmeside: React.FC = () => {
  const [beksrivelse, settBeskrivelse] = React.useState<string>("");
  const [pris, settPris] = React.useState<number | null>(null);

  const { varer, loading, error } = useSelector(
    (state: RootState) => state.notater
  );
  console.log(varer);

  const dispatch = useDispatch();
  const { hentVarer, leggTilVare, slettVare } = bindActionCreators(
    notatActionCreators,
    dispatch
  );

  React.useEffect(() => {
    hentVarer();
  }, []);

  const leggTilPost = async (text: string) => {
    leggTilVare({});
  };

  const slettPost = async (id: string) => {
    slettVare(id);
  };

  return (
    <div>
      <h1>Redux demo</h1>

      <input
        type="text"
        placeholder="Tekst for  post"
        onChange={(e) => settBeskrivelse(e.target.value)}
      />
      <input
        type="number"
        placeholder="pris"
        onChange={(e) => settPris(e.target.value)}
      />

      <button onClick={() => leggTilPost(postText)}>Legg til post</button>

      {notater.map((post: INotat) => (
        <div key={post.id}>
          <b>post: {post.id}</b>
          <span>{JSON.stringify(post)}</span>
          <button onClick={() => slettPost(post.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Hjemmeside;
