import { actualizarCliente, obtenerCliente } from "./api";
import { mostrarAlerta, validarFormulario } from "./funciones";
import { IdCliente } from "./nuevoCliente";

const nombreInput = document.querySelector("#nombre") as HTMLInputElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const telefonoInput = document.querySelector("#telefono") as HTMLInputElement;
const empresaInput = document.querySelector("#empresa") as HTMLInputElement;
const idInput = document.querySelector("#id") as HTMLInputElement;

document.addEventListener("DOMContentLoaded", async () => {
  const parametrosURL = new URLSearchParams(window.location.search);

  const idCliente = parametrosURL.get("id") as string;

  const cliente = await obtenerCliente(idCliente);
  mostrarCliente(cliente);

  // submit al formulario
  const formulario = document.querySelector("#formulario") as HTMLFormElement;
  formulario.addEventListener("submit", validarCliente);
});

function mostrarCliente(cliente: IdCliente) {
  const { nombre, email, telefono, empresa, id } = cliente;

  nombreInput.value = nombre;
  emailInput.value = email;
  telefonoInput.value = telefono;
  empresaInput.value = empresa;
  idInput.value = id;
}

function validarCliente(e: Event) {
  e.preventDefault();

  const cliente: IdCliente = {
    nombre: nombreInput.value,
    email: emailInput.value,
    telefono: telefonoInput.value,
    empresa: empresaInput.value,
    id: idInput.value,
  };

  if (!validarFormulario(cliente)) {
    mostrarAlerta("Todos los campos son obligatorios");
    return;
  }

  // reescribe el objeto
  actualizarCliente(cliente);
}
