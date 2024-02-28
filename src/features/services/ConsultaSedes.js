import AxiosInstance from "./axios";

export const verTodasLasSedes = async (body) => {
  try {
    const { data } = await AxiosInstance.post("https://desarrollo.tribunales.gov.ar/mapajudicialnet.consulta/api/Mapas/Buscar", body, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
