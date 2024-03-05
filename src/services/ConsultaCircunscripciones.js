import AxiosInstance from "./axios";

export const verTodasLasCircunscripciones = async (IdCircunscripcion, Descripcion, PaginaIndice, PaginaRegistros) => {
  try {
    const { data } = await AxiosInstance.post(`https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Circunscripciones/Buscar/?IdCircunscripcion=${IdCircunscripcion}&Descripcion=${Descripcion}&PaginaIndice=${PaginaIndice}&PaginaRegistros=${PaginaRegistros}`, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const obtenerCircunscripcion = async (body) => {
    try {
      const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Circunscripciones/Buscar", body, {
        "Content-Type": "application/json",
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };