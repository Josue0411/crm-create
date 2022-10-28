export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URl);
  const resultado = await respuesta.json();
  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URl}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
}
//prender la api local  - json-server --watch db.json -

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URl, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URl}/${id}`, {
      method: "Delete",
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
