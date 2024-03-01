import Button from '../Button/Button'
import './crearLocalidad.css'

const CrearLocalidad = () => {
    return(
        <div>
            <div className='w-100'>
                <span>Ejemplo: </span>
                <input className="inputPrueba"/>
                <span>Ejemplo: </span>
                <input className="inputPrueba"/>
            </div>
            <div className='footer d-flex w-100 justify-content-between'>
                <Button textoBoton='Cancelar'></Button>
                <Button textoBoton='Crear'></Button>
            </div>

        </div>
    )
}

export default CrearLocalidad