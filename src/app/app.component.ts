import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { NuevaListaComponent } from './dialogs/nueva-lista/nueva-lista.component';
import { MatDialog } from '@angular/material/dialog';
import { ListasCompraService } from './services/listas-compra.service';
import { ListaCompra } from './models/ListaCompra.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mostrarFormularios: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
  ) { };

  ngOnInit(): void {
    this.router.events.forEach((e: any) => {
      if (e instanceof NavigationEnd) {
        if (
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'login' ||
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'registro'
        ) {
          this.mostrarFormularios = true;
        } else {
          this.mostrarFormularios = false;
        }
      };
    });
  };

  doLogout() {
    this.auth.logOut();
    // this.router.navigate(['login'])
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
