import "./combo.css";

const Combobox = ({
  datos,
  valorAMostrar,
  ningunaOpcion,
  handleSelect,
  id = "id",

}) => {
  const handleChange = (opcionSeleccionada) => {
    if (opcionSeleccionada.target.value != "") {
      const selectedValue = opcionSeleccionada.target.value;

      const selectedOption = datos.find(
        (option) => option.data.id == selectedValue
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
            key={dato.data[valorAMostrar]}
            value={dato.data[id]}
          >
            {" "}
            {dato.data[valorAMostrar]}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Combobox;
