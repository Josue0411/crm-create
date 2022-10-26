import React from "react";

function Cliente({ cliente }) {
  const { nombre, empresa, email, telefono, ed } = cliente;
  return (
    <tr>
      <td className="p-6">{cliente.nombre}</td>
    </tr>
  );
}

export default Cliente;
