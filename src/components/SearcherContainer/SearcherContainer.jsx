/* eslint-disable react/prop-types */
import {verTodasLasCircunscripciones} from '../../services/ConsultaCircunscripciones';
import Departamentos from '../../utils/Departamento.json';
import Combobox from "../Combobox/ComboBox"
import "./SearcherContainer.css";
import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";

const SearcherContainer = ({
  localidad,
  onLocalidadChange,
  onClick,
  handleSelectComboBoxDepto,
  handleSelectComboBoxCircunscripcion,
  abrirModalCrear
}) => {

  const [circunscripciones, setCircunscripciones] = useState([])

  const obtenerTodasLasCircunscripciones = () => {
      const IdCircunscripcion =  ''
      const Descripcion =  ''
      const PaginaIndice =  0
      const PaginaRegistros = 50

    verTodasLasCircunscripciones(IdCircunscripcion, Descripcion, PaginaIndice, PaginaRegistros)
      .then((res) => {
        console.log(res.lista)
        setCircunscripciones(res.lista)
      })
      .catch((error) => {
        if (error.request.status === 0) {
          console.log("No se pudo obtener");
        }
      });
  }



  useEffect(() => {
    obtenerTodasLasCircunscripciones()
  }, [])

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
          {
            circunscripciones.length > 0 && 
            <>
                        <span>Circunscripción</span>
          <Combobox
            datos={circunscripciones}
            valorAMostrar="descripcion"
            ningunaOpcion="Ninguno"
            handleSelect={handleSelectComboBoxCircunscripcion}
          />
            </>

          }
        
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


/*
 <span>Circunscripción</span>
          <Combobox
            datos={Circunscripciones}
            valorAMostrar="name"
            ningunaOpcion="Ninguno"
            handleSelect={handleSelectComboBoxCircunscripcion}
          />
          */