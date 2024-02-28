import Circunscripciones from '../../../utils/Circunscripciones.json';
import Departamentos from '../../../utils/Departamento.json';
import Combobox from "../Combobox/ComboBox"
import Button from "../Button/Button";
import "./SearcherContainer.css";
import React from "react";


const SearcherContainer = ({
  localidad,
  onLocalidadChange,
  onClick,
  handleSelectComboBoxDepto,
  handleSelectComboBoxCircunscripcion
}) => {

  return (
    <div className="searcherContainer">
      <div className="d-flex justify-content-space-between gap-4">
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
          <span>Departamento</span>
          <Combobox
            datos={Departamentos}
            valorAMostrar="name"
            ningunaOpcion="Ninguno"
            handleSelect={handleSelectComboBoxDepto}
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

        <div className="d-flex mt-3">
          <Button
            textoBoton="Buscar"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SearcherContainer;
