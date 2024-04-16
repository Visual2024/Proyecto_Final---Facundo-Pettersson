import data from "../data/date.json";

export const PedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject((error) => console.error(error));
    }, 500);
  });
};

export const pedirDatoId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontro",
      });
    }
  });
};
