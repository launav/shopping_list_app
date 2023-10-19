import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaCompra } from 'src/app/models/ListaCompra.model';
import { ListasCompraService } from 'src/app/services/listas-compra.service';
import { EditarListaComponent } from '../../dialogs/editar-lista/editar-lista.component';
import { EliminarListaComponent } from '../../dialogs/eliminar-lista-compra/eliminar-lista-compra.component';

@Component({
  selector: 'app-item-lista-compra',
  templateUrl: './item-lista-compra.component.html',
  styleUrls: ['./item-lista-compra.component.scss']
})
export class ItemListaCompraComponent {
  @Input() listaCompra: ListaCompra = {
    id: '',
    nombre: '',
    productos: []
  };

  constructor(
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService
  ) { };

  onClick(event: Event) {
    event.stopPropagation();
  };

  abrirEditarLista() {
    const dialog = this.dialog.open(EditarListaComponent, {
      data: this.listaCompra.nombre
    });

    dialog.afterClosed().subscribe({
      next: (nombreLista: string) => {
        if (nombreLista && nombreLista.trim() !== '') {
          this.listasCompraService.updateListaCompra({
            id: this.listaCompra.id,
            nombre: nombreLista
          } as ListaCompra)
        }
      },
      error: (error) => console.log(error)
    });
  };

  abrirEliminarLista() {
    const dialog = this.dialog.open(EliminarListaComponent);

    dialog.afterClosed().subscribe({
      next: async (respuesta: boolean) => {
        if (respuesta) {
          await this.listasCompraService.deleteListaCompra(this.listaCompra.id as string);
        }
      },
      error: (error) => console.log(error)
    });
  };

}
