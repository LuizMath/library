import { type JSX, useRef } from "react";
import sapiensHeader from "../assets/sapiensHeader.png";
import { Link, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = (): JSX.Element => {
  const SideBar = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const openSideBar = (): void => {
    if (SideBar && SideBar.current) {
      SideBar.current.classList.add("active");
      SideBar.current.classList.add("transform-[translate(0%)]");
    }
  };
  const closeSideBar = (): void => {
    if (SideBar && SideBar.current) {
      SideBar.current.classList.remove("active");
      SideBar.current.classList.remove("transform-[translate(0%)]");
    }
  };
  return (
    <header className="w-full h-[100px] flex items-center justify-center">
      <section className="w-[60%] max-[1500px]:w-[80%] h-auto flex items-center justify-between">
        <div className="w-auto">
          <img src={sapiensHeader} alt="logo" />
        </div>
        <div className="w-[50%] max-[1500px]:w-[60%] max-[1000px]:w-[70%] max-[850px]:hidden flex items-center justify-between">
          <Link to="/Contact">Contate-nos</Link>
          <button
            onClick={() => {
              closeSideBar();
              navigate("/Login");
            }}
            className="btn-header"
          >
            Iniciar sessão
          </button>
          <button
            onClick={() => {
              closeSideBar();
              navigate("/Register");
            }}
            className="btn-header"
          >
            Cadastrar-se
          </button>
        </div>
        <div
          className="w-auto hidden max-[850px]:flex max-[850px]:items-center max-[850px]:justify-end"
          onClick={() => openSideBar()}
        >
          <RxHamburgerMenu className="transform-[scale(2)]" />
        </div>
      </section>
      <section className="side-bar" ref={SideBar}>
        <span className="mt-[20px]">
          <IoClose
            onClick={() => closeSideBar()}
            className="transform-[scale(2)]"
          />
        </span>
        <Link to="/Contact">Contate-nos</Link>
        <button
          onClick={() => {
            closeSideBar();
            navigate("/Login");
          }}
          className="btn-header"
        >
          Iniciar sessão
        </button>
        <button
          onClick={() => {
            closeSideBar();
            navigate("/Register");
          }}
          className="btn-header"
        >
          Cadastrar-se
        </button>
      </section>
    </header>
  );
};

export default Header;
