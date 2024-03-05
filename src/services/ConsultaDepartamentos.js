import AxiosInstance from "./axios";

export const verTodosLosDepartamentos = async (Descripcion, PaginaIndice, PaginaRegistros) => {
  try {
    const { data } = await AxiosInstance.post(`https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Departamentos/Buscar/?Descripcion=${Descripcion}&PaginaIndice=${PaginaIndice}&PaginaRegistros=${PaginaRegistros}`, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const obtenerDepartamento = async (body) => {
    try {
      const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet/api/Obtener/Buscar", body, {
        "Content-Type": "application/json",
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };