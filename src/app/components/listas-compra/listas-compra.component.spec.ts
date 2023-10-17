import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCompraComponent } from './listas-compra.component';

describe('ListasCompraComponent', () => {
  let component: ListasCompraComponent;
  let fixture: ComponentFixture<ListasCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasCompraComponent]
    });
    fixture = TestBed.createComponent(ListasCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
