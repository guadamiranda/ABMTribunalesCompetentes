/* eslint-disable react/prop-types */
import Circunscripciones from '../../../utils/Circunscripciones.json';
import Departamentos from '../../../utils/Departamento.json';
import Combobox from "../Combobox/ComboBox"
import "./SearcherContainer.css";
import React from "react";
import { Button, Input } from "antd";

const SearcherContainer = ({
  localidad,
  onLocalidadChange,
  onClick,
  handleSelectComboBoxDepto,
  handleSelectComboBoxCircunscripcion,
  abrirModalCrear
}) => {

  return (
    <div className="searcherContainer">
      <div className="d-flex justify-content-space-between gap-3">
        <div className="d-flex flex-column w-100">
          <span>Localidad</span>
          <input
            maxLength={30}
            value={localidad}
            onChange={(e) => onLocalidadChange(e.target.value)}
            className="inputPrueba"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onClick();
              }
            }}
          />
        </div>      
        <div className="d-flex flex-column w-100">
          <span>Circunscripción</span>
          <Combobox
            datos={Circunscripciones}
            valorAMostrar="name"
            ningunaOpcion="Ninguno"
            handleSelect={handleSelectComboBoxCircunscripcion}
          />
        </div>        
      </div>
      <div className="d-flex justify-content-between mt-2">
          <Button
            type="primary"
            onClick={onClick}
            className='buttonSearch'
          >
            Buscar
          </Button>

          <Button
            type="primary"
            onClick={abrirModalCrear}
            className='buttonSearch'
          >
            Agregar
          </Button>
        </div>
    </div>
  );
};

export default SearcherContainer;
