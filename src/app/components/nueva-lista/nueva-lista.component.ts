import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.component.html',
  styleUrls: ['./nueva-lista.component.scss']
})
export class NuevaListaComponent {

  nombreLista: string = '';

  constructor(private dialog: MatDialogRef<NuevaListaComponent>) { };

  cancelar() {
    this.dialog.close();
  };

}
