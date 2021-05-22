import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DrugType } from '../../../types';
import { DrugHttpService } from '../../../drug.http.service';
import { Observable } from 'rxjs';

@Injectable()
export class DrugListResolver implements Resolve<DrugType[]>{
  constructor(private drugHttpService: DrugHttpService) {}

  resolve(): Observable<DrugType[]> {
    return this.drugHttpService.getDrugList();
  }
}
