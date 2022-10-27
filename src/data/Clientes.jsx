export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URl);
  const resultado = await respuesta.json();
  return resultado;
}
//prender la api local  - json-server --watch db.json -
