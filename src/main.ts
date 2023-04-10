import { eliminarCliente, obtenerClientes } from "./ts/api";

const listado = document.querySelector("#listado-clientes") as HTMLTableElement;

document.addEventListener("DOMContentLoaded", mostrarClientes);

listado.addEventListener("click", confirmarEliminar);

async function mostrarClientes() {
  const clientes = await obtenerClientes();

  clientes.forEach((cliente) => {
    const { nombre, telefono, email, empresa, id } = cliente;

    const row = document.createElement("tr");
    row.innerHTML += `
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <p class="text-sm leading-5 font-bold text-gray-700"> ${nombre} </p>
          <p class="text-sm leading-10 text-gray-700"> ${email} </p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <p class="text-gray-700">${telefono}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
          <p class="text-gray-600">${empresa}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
          <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
          <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
      </td>
    `;

    listado.appendChild(row);
  });
}

function confirmarEliminar(e: Event) {
  if ((e.target as HTMLElement).classList.contains("eliminar")) {
    const clienteId = parseInt(
      (e.target as HTMLElement).dataset.cliente as string
    );

    const confirmar = confirm("¿Eliminar registro?");

    if (confirmar) {
      eliminarCliente(clienteId);
    }
  }
}
