import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'drug',
    loadChildren: () => import('./drug/drug.module').then(m => m.DrugModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/drug'
  },
  {
    path: '**',
    redirectTo: '/drug'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
