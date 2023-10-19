import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.scss']
})
export class EditarListaComponent {

  constructor(
    private dialog: MatDialogRef<EditarListaComponent>,
    @Inject(MAT_DIALOG_DATA) public nombreLista: string
  ) { };

  cancelar() {
    this.dialog.close();
  };

}
