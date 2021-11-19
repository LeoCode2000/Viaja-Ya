import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// Componentes
import { DestinosComponent } from './components/destinos/destinos.component';
import { TopDestinosComponent } from './components/top-destinos/top-destinos.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { CrearDestinoComponent } from './components/crear-destino/crear-destino.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/destinos',
    pathMatch:'full'
  },
  {
    path: 'destinos',
    component: DestinosComponent
  },
  {
    path: 'crear-destino',
    component: CrearDestinoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actualizar-destino/:id',
    component: CrearDestinoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'top',
    component: TopDestinosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
