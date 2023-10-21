import { Component } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const {email, password} = this.loginForm.value;

    try {
      const response = await this.authenticationService.onLogin(email, password);

      if (response && response.user) {
        this.authenticationService.isAuthenticated = true;
        this.snackBar.open('Bienvenido', 'Ok');
        this.router.navigate(['/lista-compra']);
      };

    } catch (exception: any) {
      // console.log(exception);
      if (exception.code === 'auth/user-not-found') {
        this.snackBar.open('El usuario no existe. Por favor, inténtalo de nuevo', 'Ok');
      } else if (exception.code === 'auth/invalid-login-credentials') {
        console.log(exception.code)
        this.snackBar.open('El email no es válido. Por favor, inténtalo de nuevo', 'Ok');
      } else if (exception.code === 'auth/wrong-password') {
        this.snackBar.open('El email o el password no son correctos. Por favor, inténtalo de nuevo', 'Ok');
      };
    };
  }

  // pag 108
}
