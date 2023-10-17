import { Injectable } from '@angular/core';
import { query, CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, orderBy, setDoc, updateDoc } from '@angular/fire/firestore';
import { ListaCompra } from '../models/ListaCompra.model';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto.model';

@Injectable({
  providedIn: 'root'
})
export class ListasCompraService {

  listasCompraRef: CollectionReference;

  constructor(private firestore: Firestore) {
    this.listasCompraRef = collection(firestore, '/listasCompra');
  };

  createListaCompra(listasCompra: ListaCompra): Promise<DocumentData> {
    return addDoc(this.listasCompraRef, listasCompra);
  };

  getListasCompra(): Observable<ListaCompra[]> {
    return collectionData(this.listasCompraRef, { idField: 'id' }) as Observable<ListaCompra[]>
  };

  getListaCompra(id: string): Observable<ListaCompra> {
    const listaCompra = doc(this.firestore, `/listasCompra/${id}`);
    return docData(listaCompra, { idField: 'id' }) as Observable<ListaCompra>;
  };

  updateListaCompra(listaCompra: ListaCompra) {
    const listaCompraRef = doc(this.firestore, `/listaCompra/${listaCompra.id}`);
    return setDoc(listaCompraRef, listaCompra);
  };

  deleteListaCompra(id: string): Promise<void> {
    const listaCompra = doc(this.firestore, `/listasCompra/${id}`);
    return deleteDoc(listaCompra);
  };

  // productos

  getProductosListaCompra(idLista: string): Observable<Producto[]> {
    const productosRef = collection(this.firestore, `/listasCompra/${idLista}/productos`);
    const q = query(productosRef, orderBy('nombre'));
    return collectionData(q, { idField: 'id' }) as Observable<Producto[]>;
  }

  addProductListaCompra(idLista: string, producto: Producto): Promise<DocumentData> {
    const productoRef = collection(this.firestore, `/listasCompra/${idLista}/productos`);
    return addDoc(productoRef, producto);
  };

  updateProductoListaCompra(idLista: string, idProducto: string, producto: any) {
    const productoRef = doc(this.firestore, `/listasCompra/${idLista}/productos/${idProducto}`);
    return updateDoc(productoRef, producto);
  };

  deleteProductoListaCompra(idLista: string, idProducto: string): Promise<void> {
    const productoRef = doc(this.firestore, `/listasCompra/${idLista}/productos/${idProducto}`);
    return deleteDoc(productoRef)
  }
  // pag 32


}
