import React from "react";
import { useNavigate,Form,redirect } from "react-router-dom";
import {eliminarCliente} from '../data/Clientes'
export async function action({params}){
  await eliminarCliente(params.clienteId)
  return redirect(('/'))
}
function Cliente({ cliente }) {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr>
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800"> {nombre}</p>
        <p> {empresa} </p>
      </td>

      <td>
        <p className="text-gray-600">
          <span className="text.gray-800 uppercase font-bold"> Email:</span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text.gray-800 uppercase font-bold"> telefono:</span>
          {telefono}
        </p>
      </td>

      <td className="p-6 gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form method="post" action={`/clientes/${id}/eliminar`} onSubmit={(e)=>{
          if(!confirm('Desesas eliminar este registro')){
            e.preventDefault()
          }
        }}>
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;

//host de estrapi
//postgres://root:YbzQLHjBWhCyXsw0bbV4WVJRkux1N5lw@dpg-cde0uu82i3mu1eq454f0-a.frankfurt-postgres.render.com/guitarvnz