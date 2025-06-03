import type { JSX } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type loginSchemaData, loginSchema } from "../schemas/loginSchema";
import sapiensLogin from "../assets/sapiensLogin.png";

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = () => {};
  return (
    <section className="w-full h-[calc(100%-100px)] flex items-center justify-center">
      <div className="w-[460px] h-[435px] max-[500px]:h-[460px] max-[500px]:w-[90%] max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center max-[500px]:flex-col">
        <section className="h-[355px] max-[500px]:w-[100%] shadow-[0px_5px_20px_-8px_rgba(27,84,112,0.6)] rounded-t-[10px] grid grid-cols-1 content-center justify-items-center bg-white">
          <div className="w-[370px] h-[60px] max-[500px]:w-[90%] flex items-center justify-between">
            <img src={sapiensLogin} alt="logo" />
            <h1 className="mr-[120px] text-xl max-[500px]:m-0">
              Iniciar sessão:
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start justify-center flex-col gap-6 max-[500px]:w-[90%] max-[500px]:items-center"
          >
            <input
              type="text"
              placeholder="E-mail"
              {...register("email")}
              className="input-form"
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Senha"
              className="input-form"
            />
            <label className="flex items-center justify-center gap-2">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <span>Lembrar-me</span>
            </label>
            <button
              type="submit"
              className="bg-[#4bc1d2] text-white p-[20px] rounded-[8px] w-[370px] max-[500px]:w-[100%] h-[45px] grid grid-cols-1 content-center cursor-pointer"
            >
              Iniciar Sessão
            </button>
          </form>
        </section>
        <section className="h-[80px] max-[500px]:w-[100%] flex items-center justify-center bg-white shadow-[0px_-28px_15px_-30px_rgba(27,84,112,0.6),0px_5px_20px_-8px_rgba(27,84,112,0.6)] rounded-b-[10px] gap-1 text-lg">
          <span>Não possui uma conta?</span>{" "}
          <p className="text-[#0096B5] cursor-pointer">cadastre-se</p>
        </section>
      </div>
    </section>
  );
};

export default Login;
