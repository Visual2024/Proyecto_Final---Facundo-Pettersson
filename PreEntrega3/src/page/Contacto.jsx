import { useForm } from "react-hook-form";

export const Contacto = () => {
  const { register, handleSubmit } = useForm();

 

  const enviar = (data) => {
    console.log(data);
  };


  return (
    <div className="flex flex-col items-center justify-center ml-10 h-[20rem]">
      <h1 className="font-bold text-[2rem] mb-2">Contacto</h1>
      <form className="flex flex-col w-[30%]" onSubmit={handleSubmit(enviar)}>
        <input
          className="bg-red-400 mt-2 text-white p-1 rounded-sm"
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          className="bg-red-400 mt-2 text-white p-1 rounded-sm"
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          className="bg-red-400 mt-2 text-white p-1 rounded-sm"
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button className="mt-4 bg-blue-500 rounded-xl p-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
