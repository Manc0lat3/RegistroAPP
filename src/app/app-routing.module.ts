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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'tomar-asistencia',
    loadChildren: () => import('./tomar-asistencia/tomar-asistencia.module').then( m => m.TomarAsistenciaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
