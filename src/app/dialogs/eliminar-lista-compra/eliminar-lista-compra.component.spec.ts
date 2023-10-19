import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarListaComponent } from './eliminar-lista-compra.component';

describe('EliminarListaCompraComponent', () => {
  let component: EliminarListaComponent;
  let fixture: ComponentFixture<EliminarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarListaComponent]
    });
    fixture = TestBed.createComponent(EliminarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
