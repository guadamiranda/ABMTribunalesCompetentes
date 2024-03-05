import AxiosInstance from "./axios";

export const verTodasLasLocalidades = async (IdTribunal, Descripcion, PaginaIndice, PaginaRegistros) => {
  try {
    const { data } = await AxiosInstance.post(`https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Localidades/Buscar/?IdTribunal=${IdTribunal}&Descripcion=${Descripcion}&PaginaIndice=${PaginaIndice}&PaginaRegistros=${PaginaRegistros}`, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const obtenerLocalidad = async (body) => {
  try {
    const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Localidades/Obtener", body, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};