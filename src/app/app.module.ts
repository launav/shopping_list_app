import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListasCompraComponent } from './components/listas-compra/listas-compra.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ItemProductoComponent } from './components/productos/item-producto/item-producto.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NuevoProductoComponent } from './dialogs/nuevo-producto/nuevo-producto.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { NuevaListaComponent } from './components/nueva-lista/nueva-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasCompraComponent,
    ProductosComponent,
    ItemProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    NuevaListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
