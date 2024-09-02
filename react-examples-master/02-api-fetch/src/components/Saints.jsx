import { useEffect, useState } from "react";

const Saints = ({ code }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://api.boostr.cl/santorales/${code}.json`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [code]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  return (
    <>
      {data && (
        <div>
          <h2>El Dia es de {data[0]}</h2>
        </div>
      )}
    </>
  );
};

export default Saints;
