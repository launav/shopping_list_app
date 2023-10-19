import { Producto } from "./Producto.model";

export interface ListaCompra {
  id?: string,
  nombre: string,
  productos: Producto[]
}

