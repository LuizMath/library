import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import mainSapiens from "../assets/featured-poster.png.jpg";
import searchSapiens from "../assets/searchSapiens.png";
import filterSapiens from "../assets/mixed-media-blue.jpg.png";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-center flex-col ">
      <div className="w-[90%] flex items-center justify-around flex-col mt-[100px] min-h-[305px] max-[857px]:h-[450px]">
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
      <section className="w-full h-[915px] max-[600px]:h-auto max-[600px]:pt-[40px] max-[600px]:pb-[40px] mt-[220px] bg-[#cff2f5] flex items-end justify-center overflow-visible relative">
        <div className="w-full h-auto flex items-start justify-center absolute top-[-150px] max-lg:top-[-120px]">
          <img
            src={mainSapiens}
            className="w-[980px] h-[575px] max-lg:w-[790px] max-[1024px]:h-[385px] max-[820px]:hidden"
          />
        </div>
        <div className="w-[70%] h-[490px] flex items-center justify-center gap-[5vw] flex-col max-[820px]:h-[100%] max-[820px]:items-start max-[820px]:justify-center max-[820px]:gap-[50px]">
          <span className="text-[54.4px] color-[#03151e] font-[900] text-center">
            Crie, Gerencie e Compartilhe suas Coleções
          </span>
          <p className="text-[17.6px] font-[300] text-center">
            Nosso serviço de gerenciamento de biblioteca atende bibliotecas,
            escolas, organizações e catálogos residenciais. Nosso o software
            online permite criar várias coleções, catalogar livros, filmes,
            músicas, videogames, crie tags, deixe notas, importe/exporte,
            compartilhe suas coleções e muito mais. SAPIENS é o melhor lugar
            para catalogar e gerenciar sua mídia disponível online.
          </p>
        </div>
      </section>
      <section className="w-full h-[1620px] max-[1320px]:h-auto max-[1320px]:gap-y-[100px] mb-[220px] mt-[120px] bg-white flex items-center justify-around flex-col">
        <aside className="w-[80%] grid grid-cols-2 max-[1320px]:grid-cols-1 max-[1320px]:gap-y-[50px] gap-x-[40px] place-items-start">
          <div className="flex flex-col justify-evenly h-full">
            <span className="text-[48px] color-[#03151e] font-[900] text-left max-[1320px]:text-center">
              Dados Automáticos para Livros, Filmes, música e vídeo-games.
            </span>
            <p className="text-[28.8px] font-[300] text-left max-[1320px]:text-center">
              Basta digitalizar seu código de barras ISBN/UPC usando um scanner
              físico, ou enviar suas próprias informações e Nós cuidamos do
              resto.
            </p>
          </div>
          <img
            src={searchSapiens}
            alt="search"
            className="w-full justify-self-end max-[1320px]:w-auto max-[1320px]:justify-self-center"
          />
        </aside>
        <aside className="w-[80%] grid grid-cols-2 max-[1320px]:grid-cols-1 max-[1320px]:gap-y-[50px] gap-x-[40px] place-items-center">
          <div className="flex flex-col justify-evenly h-full order-last max-[1320px]:order-1">
            <span className="text-[48px] color-[#03151e] font-[900] text-left max-[1320px]:text-center">
              A Sincroniza de Nuvem mantém suas coleções atualizadas em vários
              dispositivos.
            </span>
            <p className="text-[28.8px] font-[300] text-left max-[1320px]:text-center">
              Acesse suas coleções de qualquer lugar praticamente qualquer
              dispositivo.
            </p>
          </div>
          <img
            src={mainSapiens}
            alt="main"
            className="w-[90%] h-full justify-self-start order-1 max-[1320px]:order-last max-[1320px]:w-auto max-[1320px]:h-[335px] max-[1320px]:justify-self-center"
          />
        </aside>
        <aside className="w-[80%] grid grid-cols-2 max-[1320px]:grid-cols-1 max-[1320px]:gap-y-[50px] gap-x-[40px] place-items-center">
          <div className="flex flex-col justify-evenly h-full">
            <span className="text-[48px] color-[#03151e] font-[900] text-left max-[1320px]:text-center">
              Crie até 100 mixados coleções de mídia.
            </span>
            <p className="text-[28.8px] font-[300] text-left max-[1320px]:text-center">
              Misture e combine tipos de mídia livremente. Eram flexível
              propositalmente para que você possa organizar seu coleções para
              atender às suas necessidades. Livros, filmes, música e jogos -
              mantenha-os juntos ou separado.
            </p>
          </div>
          <img
            src={filterSapiens}
            alt="filter"
            className="w-full justify-self-end max-[1320px]:w-auto max-[1320px]:justify-self-center"
          />
        </aside>
      </section>
    </section>
  );
};

export default Home;
