import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugListItemComponent } from './drug-list-item.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [DrugListItemComponent],
  exports: [DrugListItemComponent],
})
export class DrugListItemModule {}
