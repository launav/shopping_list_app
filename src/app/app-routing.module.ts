import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: ProductosComponent, canActivate: [AuthGuardGuard] },
  { path: 'lista-compra', redirectTo: '/', pathMatch: 'full' },
  { path: 'lista-compra/:id', component: ProductosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
