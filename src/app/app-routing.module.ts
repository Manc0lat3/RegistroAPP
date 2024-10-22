import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'hacer-reserva',
    loadChildren: () => import('./hacer-reserva/hacer-reserva.module').then(m => m.HacerReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'editar-reserva',
    loadChildren: () => import('./editar-reserva/editar-reserva.module').then(m => m.EditarReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'historial-reserva',
    loadChildren: () => import('./historial-reserva/historial-reserva.module').then(m => m.HistorialReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'hacer-reserva',
    loadChildren: () => import('./hacer-reserva/hacer-reserva.module').then( m => m.HacerReservaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
