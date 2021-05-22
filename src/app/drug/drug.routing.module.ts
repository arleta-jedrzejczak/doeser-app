import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugListResolver } from './views/drug-list/resolvers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () => import('./views/drug-list/drug-list.module').then(m => m.DrugListModule),
    resolve: {
      drugList: DrugListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugRoutingModule {}
