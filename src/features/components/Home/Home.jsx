import SearcherContainer from '../SearcherContainer/SearcherContainer';
import { verTodasLasSedes } from "../../services/ConsultaSedes";
import Button from '../Button/Button';
import Table from '../Table/Table';
import { useState } from 'react';
import './home.css';

const Home = () => {
    const [localidad, setLocalidad] = useState("")
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("")
    const [circunscripcionSeleccionada, setCircunscripccionSeleccionada] = useState("")
    const [sedes, setSedes] = useState("")

    console.log(sedes)

    const dataLoad = () => {
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
    };

    return(
        <div className='container-fluid d-flex justify-content-center'>
            <div className='tableContainer'>
                <header className='row px-3 pt-3 pb-1'>
                    <div className='col fs-4 mainTitle'>Localidades</div>
                    <div className='col d-flex justify-content-end'><Button textoBoton='Crear Localidad' onClick={() => console.log('Hi')}/></div>
                </header>
                <div className='w-100 d-flex justify-content-center'>
                    <div className='divider'></div>
                </div>
                <body className='px-3'>
                    <div>
                        <SearcherContainer 
                            localidad={localidad}
                            onLocalidadChange={setLocalidad} 
                            onClick={dataLoad}
                            handleSelectComboBoxDepto={setDepartamentoSeleccionado}
                            handleSelectComboBoxCircunscripcion={setCircunscripccionSeleccionada}
                        />
                    </div>
                    <div>
                        <Table />
                    </div>

                </body>
            </div>
        </div>
    )
}

export default Home