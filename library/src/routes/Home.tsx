import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import mainSapiens from "../assets/mainSapiens.png";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-center flex-col">
      <div className="w-[90%] flex items-center justify-around flex-col mt-[100px] min-h-[305px] max-h-[1005px]">
        <span className="text-[72px] color-[#03151e] font-[900] text-center">
          Catalogação em Nuvem
        </span>
        <p className="text-[28.8px] font-[300] text-center">
          Sua biblioteca nunca pareceu tão boa. Livros, filmes, músicas e
          videogames.
        </p>
        <button
          onClick={() => navigate("/Register")}
          className="btn-form rounded-[200px] w-[160px]"
        >
          Começar
        </button>
      </div>
      <section className="w-full h-[915px] bg-[#cff2f5] mt-[220px] flex items-center justify-center gap-[100px] relative">
        <div className="w-full h-full relative flex items-center justify-center z-1">
          <img
            src={mainSapiens}
            alt="home"
            className="aboslute bottom-[250px]"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
