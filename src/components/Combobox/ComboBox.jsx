import "./combo.css";

const Combobox = ({
  datos,
  valorAMostrar,
  ningunaOpcion,
  handleSelect,
  id = "id",

}) => {
  console.log('datiños', datos[0].id)
  const handleChange = (opcionSeleccionada) => {
    if (opcionSeleccionada.target.value != "") {
      const selectedValue = opcionSeleccionada.target.value;

      const selectedOption = datos.find(
        (option) => option.id == selectedValue
      );
      handleSelect(selectedOption);
    } else {
      handleSelect(opcionSeleccionada.target.value);
    }
  };

  return (
    <div>
      <select
        className="comboSelect"
        name="selectComboBox"
        id="selectComboBox"
        onChange={handleChange}
      >
        <option value="">{ningunaOpcion}</option>
        {datos.map((dato) => (
          <option
            key={dato[valorAMostrar]}
            value={dato[id]}
          >
            {" "}
            {dato[valorAMostrar]}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Combobox;
