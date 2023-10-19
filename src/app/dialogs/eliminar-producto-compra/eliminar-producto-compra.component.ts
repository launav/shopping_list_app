import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-producto-compra',
  templateUrl: './eliminar-producto-compra.component.html',
  styleUrls: ['./eliminar-producto-compra.component.scss']
})
export class EliminarProductoCompraComponent {

  constructor(private dialog: MatDialogRef<EliminarProductoCompraComponent>) { };

  cancelar() {
    this.dialog.close();
  };

}






