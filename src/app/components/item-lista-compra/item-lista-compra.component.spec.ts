import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaCompraComponent } from './item-lista-compra.component';

describe('ItemListaCompraComponent', () => {
  let component: ItemListaCompraComponent;
  let fixture: ComponentFixture<ItemListaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListaCompraComponent]
    });
    fixture = TestBed.createComponent(ItemListaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
