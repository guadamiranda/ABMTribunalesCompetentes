import AxiosInstance from "./axios";

export const verTodasLosTribunales = async (IdCircunscripcion, Descripcion, PaginaIndice, PaginaRegistros) => {
  try {
    const { data } = await AxiosInstance.post(`https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Tribunales/Buscar/?IdCircunscripcion=${IdCircunscripcion}&Descripcion=${Descripcion}&PaginaIndice=${PaginaIndice}&PaginaRegistros=${PaginaRegistros}`, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const obtenerTribunal = async (body) => {
    try {
      const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Tribunales/Buscar", body, {
        "Content-Type": "application/json",
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };