import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugListComponent } from './drug-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DrugListItemModule } from './components/drug-list-item';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [{ path: '', component: DrugListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), DrugListItemModule, TranslocoModule],
  declarations: [DrugListComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'views/drug/list', alias: 'drug-list' },
    },
  ]
})
export class DrugListModule {}
