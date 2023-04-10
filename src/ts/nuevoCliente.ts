import { nuevoCliente } from "./api";
import { mostrarAlerta, validarFormulario } from "./funciones";

export const formulario = document.querySelector(
  "#formulario"
) as HTMLFormElement;
formulario.addEventListener("submit", validarCliente);

export interface Cliente {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
}

export interface IdCliente extends Cliente {
  id: string;
}

function validarCliente(e: Event) {
  e.preventDefault();

  const nombre = (document.querySelector("#nombre") as HTMLInputElement).value;
  const email = (document.querySelector("#email") as HTMLInputElement).value;
  const telefono = (document.querySelector("#telefono") as HTMLInputElement)
    .value;
  const empresa = (document.querySelector("#empresa") as HTMLInputElement)
    .value;

  const cliente: Cliente = {
    nombre,
    email,
    telefono,
    empresa,
  };

  if (!validarFormulario(cliente)) {
    mostrarAlerta("Todos los campos son obligatorios");
    return;
  }

  nuevoCliente(cliente);
}
