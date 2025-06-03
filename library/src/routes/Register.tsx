import type { JSX } from "react";
const Register = (): JSX.Element => {
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-start gap-[50px] [@media(min-height:1030px)]:justify-center flex-col">
      <div className="w-[90%] flex items-center justify-center flex-col mt-[50px]">
        <span className="text-[72px] color-[#03151e] font-[900]">
          Cadastre-se na SAPIENS
        </span>
        <p className="text-[28.8px] font-[300]">
          O catálogo da sua biblioteca está disponível em qualquer lugar, a
          qualquer hora.
        </p>
      </div>
      <div className="w-[960px] h-[530px] p-[30px] bg-white shadow-[0px_5px_20px_-8px_rgba(27,84,112,1)] mt-[50px] mb-[100px]">
        <section className="w-full h-full border-t-1 border-t-[#c9d6df] flex items-center justify-between flex-col h-full mt-[15px]">
          <div className="w-[95%] mt-[30px]">
            <span className="font-[700] text-[28.8px]">
              Informações da conta:
            </span>
          </div>
          <form className="w-[95%] h-auto flex justify-between flex-col mb-[20px]">
            <section className="w-full grid grid-cols-2 gap-y-[20px]">
              <label className="label-form">
                <span>Primeiro Nome</span>
                <input
                  className="input-form w-[95%]"
                  placeholder="Primeiro Nome"
                />
              </label>
              <label className="label-form">
                <span>Último Nome</span>
                <input
                  className="input-form w-[95%]"
                  placeholder="Último Nome"
                />
              </label>
              <label className="label-form">
                <span>E-mail</span>
                <input className="input-form w-[95%]" placeholder="E-mail" />
              </label>
              <label className="label-form">
                <span>Senha</span>
                <input className="input-form w-[95%]" placeholder="Senha" />
              </label>
              <label className="label-form">
                <span>País</span>
                <select
                  defaultValue={"DEFAULT"}
                  className="text-black cursor-pointer input-form w-[95%]"
                >
                  <option value="DEFAULT" disabled>
                    País
                  </option>
                  <option value="Brasil">Brasil</option>
                </select>
              </label>
            </section>
            <button type="submit" className="btn-form mt-[40px] w-[265px]">
              Iniciar minha Biblioteca
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Register;
