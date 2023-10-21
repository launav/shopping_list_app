import { Injectable } from '@angular/core';
import { Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
*servicio de registro y login a partir de usuario y contraseña con firebase
*/
export class AuthenticationService {

  isAuthenticated: boolean = false;

  constructor(private authFire: Auth,
    private router: Router) { };



  /**
   * Metodo para registrar al user mediante el email y contraseña
   * @param {string} email  correo del user
   * @param {string} password  password del user
   * @returns {Promise<UserCredential>} promesa con los parametros le hemos pasado
    */
  onRegister(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.authFire, email, password);
  };

  /**
   * Metodo para login del user mediante el email y contraseña
   * @param {string} email correo del user
   * @param {string} password password del user
   * @returns {Promise<UserCredential>} promesa con los parametros le hemos pasado
   */
  onLogin(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.authFire, email, password);
  };

  logOut(): Promise<any> {
    return signOut(this.authFire);
  };

}
