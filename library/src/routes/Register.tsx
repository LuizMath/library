import type { JSX } from "react";
import {
  registerSchema,
  type registerSchemaData,
} from "../schemas/registerShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchemaData>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data: registerSchemaData) => {};
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-start gap-[50px] [@media(min-height:1030px)]:justify-center flex-col">
      <div className="w-[90%] flex items-center justify-center flex-col mt-[50px]">
        <span className="text-[72px] color-[#03151e] font-[900] text-center">
          Cadastre-se na SAPIENS
        </span>
        <p className="text-[28.8px] font-[300] text-center">
          O catálogo da sua biblioteca está disponível em qualquer lugar, a
          qualquer hora.
        </p>
      </div>
      <div className="w-[960px] max-[1000px]:w-[90%] h-[530px] p-[30px] bg-white shadow-[0px_5px_20px_-8px_rgba(27,84,112,1)] mt-[50px] mb-[100px]">
        <section className="w-full h-full border-t-1 border-t-[#c9d6df] flex items-center justify-between flex-col h-full mt-[15px]">
          <div className="w-[95%] mt-[30px]">
            <span className="font-[700] text-[28.8px] max-[407px]:text-[24px] max-[350px]:text-[22px]">
              Informações da conta:
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[95%] h-auto flex justify-between flex-col mb-[20px]"
          >
            <section className="w-full grid grid-cols-2 gap-y-[20px]">
              <label className="label-form">
                <span>Primeiro Nome</span>
                <input
                  {...register("name")}
                  type="text"
                  className="input-form w-[95%]"
                  placeholder="Primeiro Nome"
                />
              </label>
              <label className="label-form">
                <span>Último Nome</span>
                <input
                  {...register("lastName")}
                  type="text"
                  className="input-form w-[95%]"
                  placeholder="Último Nome"
                />
              </label>
              <label className="label-form">
                <span>E-mail</span>
                <input
                  {...register("email")}
                  type="email"
                  className="input-form w-[95%]"
                  placeholder="E-mail"
                />
              </label>
              <label className="label-form">
                <span>Senha</span>
                <input
                  {...register("password")}
                  type="password"
                  className="input-form w-[95%]"
                  placeholder="Senha"
                />
              </label>
              <label className="label-form">
                <span>País</span>
                <select
                  defaultValue={"DEFAULT"}
                  {...register("country")}
                  className="text-black cursor-pointer input-form w-[95%]"
                >
                  <option value="DEFAULT" disabled>
                    País
                  </option>
                  <option value="Brasil">Brasil</option>
                </select>
              </label>
            </section>
            <button
              type="submit"
              className="btn-form mt-[40px] w-[265px] max-[720px]:w-[calc(50%-10px)] max-[575px]:w-[100%]"
            >
              Iniciar minha Biblioteca
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Register;
