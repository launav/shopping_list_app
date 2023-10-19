import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repitePassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordsIguales('password', 'repitePassword')
    });
  }

  passwordsIguales(passA: string, passB: string) {
    return (formGroup: FormGroup) => {
      const controlPassA = formGroup.controls[passA];
      const controlPassB = formGroup.controls[passB];

      if (controlPassA.value !== controlPassB.value) {
        controlPassB.setErrors({ passwordsIguales: true });
      } else {
        controlPassB.setErrors(null);
      }
    }
  }

  async doRegistro() {
    const {email, password} = this.registroForm.value;

    try {
      const response = await this.authenticationService.onRegister(email, password);
      if (response) {
        this.snackBar.open('Te has registrado correctamente. Ya puedes identificarte.', 'Vamos', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.router.navigate(['/login']);
      }
    } catch(exception: any) {
      console.log(exception);
      if (exception.code === 'auth/email-already-in-use') {
        this.snackBar.open('El email ya existe. Por favor, inténtalo con otro', 'Ok');
      } else if (exception.code === 'auth/invalid-email') {
        this.snackBar.open('El email proporcionado no es válido. Por favor, revísalo e inténtalo de nuevo', 'Ok');
      } else if (exception.code === 'auth/invalid-password') {
        this.snackBar.open('la contraseña debe tener al menos 6 caracteres. Inténtalo de nuevo', 'Ok');
      }
    }
  }
}
