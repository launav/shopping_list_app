import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/models/Producto.model';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {
  datosProducto: Producto = {
    nombre: '',
    unidades: 0,
    marcado: false
  }

  constructor(private dialog: MatDialogRef<NuevoProductoComponent>) {}


  cancelar() {
    this.dialog.close();
  }
}
