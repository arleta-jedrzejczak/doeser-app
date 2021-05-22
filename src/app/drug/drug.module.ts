import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugRoutingModule } from './drug.routing.module';
import { DrugHttpService } from './drug.http.service';
import { DrugListResolver } from './views/drug-list/resolvers';

@NgModule({
  imports: [CommonModule, DrugRoutingModule],
  providers: [DrugHttpService, DrugListResolver]
})
export class DrugModule {}
