import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drug-list-item',
  template: `<div>item</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugListItemComponent {}
