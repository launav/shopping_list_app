import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NuevoProductoComponent } from 'src/app/dialogs/nuevo-producto/nuevo-producto.component';
import { Producto } from 'src/app/models/Producto.model';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit, OnDestroy {
  productos?: Producto[];
  noHayListaSeleccionada: boolean = true;
  subscriptionProductos!: Subscription;
  idLista: string = '';

  constructor(
    private listasCompraService: ListasCompraService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptionProductos = this.route.params.subscribe({
      next: (params: Params) => {
        if (Object.keys(params).length === 0) {
          this.noHayListaSeleccionada = true;
        } else {
          this.noHayListaSeleccionada = false;
          this.idLista = params['id'];
          this.listasCompraService.getProductosFromListaCompra(this.idLista)
            .subscribe({
              next: (response: Producto[]) => this.productos = response,
              error: (error) => console.log(error)
            })
        }
      }
    });
  }

  abrirDialogoNuevoProducto() {
    const dialog = this.dialog.open(NuevoProductoComponent);
    dialog.afterClosed().subscribe({
      next: async (result: any) => {
        if (result) {
          await this.listasCompraService.addProductoToListaCompra(this.idLista, result as Producto);
        }
      },
      error: (error) => console.log(error)
    })
  }

  ngOnDestroy(): void {
    this.subscriptionProductos.unsubscribe();
  }
}
