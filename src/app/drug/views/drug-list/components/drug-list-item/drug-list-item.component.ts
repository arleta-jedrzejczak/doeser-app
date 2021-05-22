import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DrugType } from '../../../../types';

@Component({
  selector: 'app-drug-list-item',
  templateUrl: 'drug-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugListItemComponent {
  @Input() drug!: DrugType;
}
