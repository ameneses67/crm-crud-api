import { Cliente } from "./nuevoCliente";

export function mostrarAlerta(mensaje: string) {
  const alerta = document.querySelector(".alerta");

  if (!alerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "alerta",
      "bg-red-100",
      "border",
      "border-red-400",
      "text-red-700",
      "px-4",
      "sm:px-8",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "text-center",
      "font-semibold"
    );

    alerta.textContent = mensaje;

    (document.querySelector("#main") as HTMLElement).appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

export function validarFormulario(obj: Cliente) {
  return Object.values(obj).every((input) => input !== "");
}
