import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugType } from '../../types';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugListComponent {
  readonly drugList: DrugType[] = this.activatedRoute.snapshot.data.drugList;

  constructor(private activatedRoute: ActivatedRoute) {}
}
