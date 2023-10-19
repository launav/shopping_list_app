import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/models/Producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent {

  constructor(
    private dialog: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProducto: Producto
  ) { };

  cancelar() {
    this.dialog.close();
  };
}
