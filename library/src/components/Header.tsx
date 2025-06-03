import type { JSX } from "react";
import sapiensHeader from "../assets/sapiensHeader.png";
import { Link } from "react-router";

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-[100px] flex items-center justify-center">
      <section className="w-[60%] max-[1500px]:w-[80%] flex items-center justify-between">
        <div className="w-auto">
          <img src={sapiensHeader} alt="logo" />
        </div>
        <div className="w-[50%] max-[1500px]:w-[60%] max-[1000px]:w-[70%] flex items-center justify-between">
          <Link to="/Contact">Contate-nos</Link>
          <button className="btn-header">Iniciar sessão</button>
          <button className="btn-header">Cadastrar-se</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
