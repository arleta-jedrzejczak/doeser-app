import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drug-list',
  template: `<div>Drug List Component</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugListComponent {}
