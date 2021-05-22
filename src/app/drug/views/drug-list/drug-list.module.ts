import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugListComponent } from './drug-list.component';
import { DrugListHttpService } from './drug-list.http.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DrugListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DrugListComponent],
  providers: [DrugListHttpService]
})
export class DrugListModule {}
