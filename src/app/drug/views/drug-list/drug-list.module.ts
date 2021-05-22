import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugListComponent } from './drug-list.component';
import { DrugListHttpService } from './drug-list.http.service';
import { RouterModule, Routes } from '@angular/router';
import { DrugListItemModule } from './components/drug-list-item';

const routes: Routes = [{ path: '', component: DrugListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), DrugListItemModule],
  declarations: [DrugListComponent],
  providers: [DrugListHttpService]
})
export class DrugListModule {}
