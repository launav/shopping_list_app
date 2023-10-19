import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-lista',
  templateUrl: './eliminar-lista-compra.component.html',
  styleUrls: ['./eliminar-lista-compra.component.scss']
})
export class EliminarListaComponent {
  constructor(private dialog: MatDialogRef<EliminarListaComponent>) { };

  cancelar() {
    this.dialog.close();
  };
}
