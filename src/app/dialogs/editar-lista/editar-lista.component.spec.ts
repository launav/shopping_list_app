import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarListaComponent } from './editar-lista.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditarListaComponent', () => {
  let component: EditarListaComponent;
  let fixture: ComponentFixture<EditarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarListaComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },

      ]
    });
    fixture = TestBed.createComponent(EditarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
