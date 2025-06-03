import type { JSX } from "react";

const Contact = (): JSX.Element => {
  return (
    <section className="w-full min-h-[calc(100%-100px)] max-h-auto flex items-center justify-start flex-col bg-[#eaf3f4] bg-no-repeat bg-bottom bg-[url('/images/contactBackground.png')]">
      <div className="w-[90%] flex items-center justify-center flex-col mt-[50px]">
        <span className="text-[72px] color-[#03151e] font-[900] text-center">
          Contate-nos
        </span>
        <p className="text-[28.8px] font-[300] text-center">
          Nossos atendentes estão preparados para te ajudar
        </p>
      </div>
      <div className="w-[585px] max-[610px]:w-[90%] h-[490px] bg-gray-500 p-[30px] bg-white shadow-[0px_5px_20px_-8px_rgba(27,84,112,1)] mt-[50px] mb-[100px] rounded-[10px]">
        <form className="h-full grid grid-cols-1 content-between">
          <label className="label-form">
            <span>Seu Nome</span>
            <input className="input-form w-[100%]" />
          </label>
          <label className="label-form">
            <span>Email</span>
            <input className="input-form w-[100%]" />
          </label>
          <label className="label-form">
            <span>Comentário/Dúvida</span>
            <textarea
              rows={6}
              className="w-[100%] outline-none text-[#5e8396] outline-none rounded-[4px] border-[#bad7e3] border-solid border-[1px] p-[15px]"
            ></textarea>
          </label>
          <button className="btn-form w-[115px]">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
