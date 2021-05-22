import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugListItemComponent } from './drug-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DrugListItemComponent],
  exports: [DrugListItemComponent]
})
export class DrugListItemModule {}
