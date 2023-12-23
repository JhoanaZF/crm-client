import { obtenerCliente } from "../data/Clientes";

export const loader = async ({ params }) => {
  const cliente = await obtenerCliente(params.clientesId);

  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultado",
    });
  }
  return cliente || null;
};

const EditarCliente = () => {
  return <div>EditarCliente</div>;
};

export default EditarCliente;
