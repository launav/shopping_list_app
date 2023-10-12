import { Producto } from "./Producto.model";

export interface ListaCompra {
  id?: number,
  nombre: string,
  productos: Producto[]
}

