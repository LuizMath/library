import type { JSX } from "react";
const Register = (): JSX.Element => {
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-start gap-[50px] flex-col">
      <div className="w-[90%] flex items-center justify-center flex-col mt-[50px]">
        <span className="text-[72px] color-[#03151e] font-[900]">
          Cadastre-se na SAPIENS
        </span>
        <p className="text-[28.8px] font-[300]">
          O catálogo da sua biblioteca está disponível em qualquer lugar, a
          qualquer hora.
        </p>
      </div>
      <div className="w-[960px] h-[530px] p-[30px] bg-white shadow-[0px_5px_20px_-8px_rgba(27,84,112,1)] mb-[50px]"></div>
    </section>
  );
};

export default Register;
