import AxiosInstance from "./axios";

export const verTodasLosTribunales = async (IdDepartamento, Descripcion, PaginaIndice, PaginaRegistros) => {
  try {
    const { data } = await AxiosInstance.post(`https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Pedanias/Buscar/?IdCircunscripcion=${IdDepartamento}&Descripcion=${Descripcion}&PaginaIndice=${PaginaIndice}&PaginaRegistros=${PaginaRegistros}`, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const obtenerPedania = async (body) => {
    try {
      const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Pedanias/Buscar", body, {
        "Content-Type": "application/json",
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };