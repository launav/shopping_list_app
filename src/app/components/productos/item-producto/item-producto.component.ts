import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/Producto.model';
import { EditarProductoComponent } from '../../../dialogs/editar-producto/editar-producto.component';
import { MatDialog } from '@angular/material/dialog';
import { ListasCompraService } from 'src/app/services/listas-compra.service';
import { EliminarProductoCompraComponent } from '../../../dialogs/eliminar-producto-compra/eliminar-producto-compra.component';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent {
  @Input() datosProducto: Producto = {
    id: '',
    nombre: '',
    unidades: 0,
    marcado: false
  };

  @Input() idListaCompra: string = ''

  constructor(
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService
  ) { };


  abrirEditarProducto() {
    const dialog = this.dialog.open(EditarProductoComponent, {
      data: {
        nombre: this.datosProducto.nombre,
        unidades: this.datosProducto.unidades
      }
    });

    dialog.afterClosed().subscribe({
      next: async (result: Producto) => {
        if (result) {
          await this.listasCompraService.updateProductoFromListaCompra(this.idListaCompra, this.datosProducto.id as string, result);
        };
      },
      error: (error) => console.log(error)
    });
  }

  abrirEliminarProducto() {
    const dialog = this.dialog.open(EliminarProductoCompraComponent);

    dialog.afterClosed().subscribe({
      next: async (result: boolean) => {
        if (result) {
          await this.listasCompraService.deleteProductoFromListaCompra(this.idListaCompra,this.datosProducto.id as string);
        }
      },
      error: (error) => console.log(error)
    });
   };

   async toggleSelection(listOption: MatListOption){
    await this.listasCompraService.updateProductoFromListaCompra(
      this.idListaCompra, this.datosProducto.id as string, {
        marcado: listOption.selected
      });
   };

  onClick(evt: Event) {
    evt.stopPropagation();
  };
}
