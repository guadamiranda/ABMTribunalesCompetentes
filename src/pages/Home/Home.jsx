import SearcherContainer from "../../components/SearcherContainer/SearcherContainer";
import ModalComp from '../../components/Modal/Modal';
import CrearLocalidad from '../../components/CrearLocalidad/CrearLocalidad';
import { Button } from "antd";
import { useState } from "react";
import "./home.css";
import data from "../../utils/Localidades.json";
import TableC from "../../components/TableC/TableC";

const Home = () => {
    const [localidad, setLocalidad] = useState("")
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("")
    const [circunscripcionSeleccionada, setCircunscripccionSeleccionada] = useState("")
    const [sedes, setSedes] = useState("")
    const [abrirModal, setAbrirModal] = useState(false)

    const columns = [
      {
        title: "Id",
        dataIndex: "id",
      },
      {
        title: "Departamento",
        dataIndex: "departamento",
      },
      {
        title: "Pedania",
        dataIndex: "pedania",
      },
      {
        title: "Localidad",
        dataIndex: "localidad",
      },
      {
        title: "Circunscripcion",
        dataIndex: "circunscripcion",
      },
      {
        title: "Tribunal",
        dataIndex: "tribunal",
      },
    ];
    
    /* const dataLoad = () => {
        //setIsLoading(true);
        const body = {
          idDepartamentoGlobal: departamentoSeleccionado === "" ? "" : departamentoSeleccionado.data.id,
          idCircunscripcionGlobal: circunscripcionSeleccionada === "" ? "" : circunscripcionSeleccionada.data.id,
          localidad: localidad.trim(),
        };
        console.log(localidad)
    
        verTodasLasSedes(body)
          .then((res) => {
            console.log('res', res)
            setSedes(res.lista);
            setCurrentData(res.lista.slice(0, pageSize));
          })
          .finally(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            if (error.request.status === 0) {
              console.log("No se pudo obtener");
            }
          });
    }; */

  const actions = () => {
    return (
      <>
        <div
          className="contenedorBotonesGrilla"
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type="primary" className="buttonSearch">
            Editar / Ver  
          </Button>
        </div>
      </>
    );
  };

  const abrirModalCrear = () => {
    setAbrirModal(true)
  }

  return (
    <>
    <div className="container-fluid d-flex justify-content-center mt-2">
      <div className="tableContainer">
        <div className="px-3">
          <div>
            <SearcherContainer
              localidad={localidad}
              onLocalidadChange={setLocalidad}
              onClick={() => console.log('hi')}
              handleSelectComboBoxDepto={setDepartamentoSeleccionado}
              handleSelectComboBoxCircunscripcion={
                setCircunscripccionSeleccionada
              }
              abrirModalCrear={abrirModalCrear}
            />
          </div>
          <div className="mt-3">
            <TableC columns={columns} data={data} actions={actions} />
          </div>
        </div>
        </div>
    </div>

        <ModalComp 
          tituloModal='Crear Localidad' 
          abrirModal={abrirModal} 
          setAbrirModal={setAbrirModal}
        >
          <CrearLocalidad />
        </ModalComp>

      </>
      
        
    )
}

export default Home;
