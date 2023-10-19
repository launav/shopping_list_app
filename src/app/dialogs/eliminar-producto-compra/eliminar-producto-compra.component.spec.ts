import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoCompraComponent } from './eliminar-producto-compra.component';

describe('EliminarProductoCompraComponent', () => {
  let component: EliminarProductoCompraComponent;
  let fixture: ComponentFixture<EliminarProductoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarProductoCompraComponent]
    });
    fixture = TestBed.createComponent(EliminarProductoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
