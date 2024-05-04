import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="font-bold text-[1.9rem]">Contacto</h1>
      <form
        className="flex flex-col mt-5 w-[40%]"
        onSubmit={handleSubmit(enviar)}
      >
        <input
          className="p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2"
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          className="p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2"
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          className="p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2"
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <div className='flex flex-col items-center mt-5'>
          <button className="bg-green-500 p-3 rounded-xl pl-5 pr-5" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
