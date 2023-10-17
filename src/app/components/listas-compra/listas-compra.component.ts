import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaCompra } from 'src/app/models/ListaCompra.model';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss']
})
export class ListasCompraComponent implements OnInit {
  listasCompra$!: Observable<ListaCompra[]>;

  constructor(private listasCompraService: ListasCompraService) { };

  ngOnInit(): void {
    this.listasCompra$ = this.listasCompraService.getListasCompra();

  };
}
