import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        MatSnackBarModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar error de email requerido', () => {
    component.registroForm.controls['email'].setValue('');
    const submitButton = fixture.nativeElement.queerySelector('button[type=submit]');
    submitButton.click();
    expect(component.registroForm.controls['email'].getError('required')).toBeTrue();
  })

  it('Debe mostrar error por contraseñas distintas', () => {
    component.registroForm.controls['password'].setValue('123456');
    component.registroForm.controls['repitePassword'].setValue('12345');
    const submitButton = fixture.nativeElement.queerySelector('button[type=submit]');
    submitButton.click();
    expect(component.registroForm.controls['repitePassword'].getError('passwordsIguales')).toBeTrue();
  })
});
