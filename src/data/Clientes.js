export const obtenerClientes = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
};

export const obtenerCliente = async (id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}${id}`);
  const resultado = await respuesta.json();
  return resultado;
};

export const agregarCliente = async (datos) => {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};
