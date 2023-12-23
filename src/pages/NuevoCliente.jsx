import { useActionData, useNavigate, redirect } from "react-router-dom";
import { agregarCliente } from "../data/Clientes";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  //retorna datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);
  return redirect("/");
};

const NuevoCliente = () => {
  //obtener el resultado de un action
  const errores = useActionData();
  const navigate = useNavigate();
  console.log(errores);
  return (
   
  );
};

export default NuevoCliente;
