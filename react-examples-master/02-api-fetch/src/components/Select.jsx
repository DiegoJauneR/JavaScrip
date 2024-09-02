const CITIES = [
  { code: "hoy", name: "Hoy" },
  { code: "manana", name: "Mañana" },
  { code: "ayer", name: "Ayer" },
];

const Select = ({ value, setValue }) => {
  return (
    <>
      <label htmlFor="cities">Selecciona una ciudad:</label>
      <select
        name="cities"
        id="cities"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        {CITIES.map((city, index) => (
          <option key={index} value={city.code}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
