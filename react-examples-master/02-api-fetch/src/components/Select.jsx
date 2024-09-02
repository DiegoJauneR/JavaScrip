const Saints = [
  { code: "hoy", name: "Hoy" },
  { code: "manana", name: "Mañana" },
  { code: "ayer", name: "Ayer" },
];

const Select = ({ value, setValue }) => {
  return (
    <>
      <label htmlFor="Saints">Selecciona un dia:</label>
      <select
        name="saints"
        id="saints"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        {Saints.map((saint, index) => (
          <option key={index} value={saint.code}>
            {saint.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
