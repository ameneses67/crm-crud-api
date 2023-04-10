import type { Cliente, IdCliente } from "./nuevoCliente";

const url = "http://localhost:4000/clientes";

// crear nuevo cliente
export const nuevoCliente = async (cliente: Cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

// obtener todos los clientes
export const obtenerClientes = async (): Promise<IdCliente[]> => {
  try {
    const resultado = await fetch(url);
    const clientes: IdCliente[] = await resultado.json();
    return clientes;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

// eliminar cliente
export const eliminarCliente = async (id: number) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// obtener un cliente por medio de su id
export const obtenerCliente = async (id: string): Promise<Cliente | any> => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente: Cliente = await resultado.json();
    return cliente;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// actualiza registro
export const actualizarCliente = async (cliente: IdCliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
