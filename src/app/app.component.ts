import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { NuevaListaComponent } from './components/nueva-lista/nueva-lista.component';
import { MatDialog } from '@angular/material/dialog';
import { ListasCompraService } from './services/listas-compra.service';
import { ListaCompra } from './models/ListaCompra.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService
  ) { };

  doLogout() {

  };

  abrirDialogoNuevaLista() {
    const dialog = this.dialog.open(NuevaListaComponent);

    dialog.afterClosed().subscribe({
      next: async (nombreLista: string) => {
        if (nombreLista && nombreLista.trim() !== '') {
          await this.listasCompraService.createListaCompra({
            nombre: nombreLista,
            productos: []
          } as ListaCompra);
        };
      },
      error: (error) => console.log(error)
    });
  };

}
