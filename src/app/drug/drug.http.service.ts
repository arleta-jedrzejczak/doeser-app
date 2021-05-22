import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrugType } from './types';
import { Observable, of } from 'rxjs';

@Injectable()
export class DrugHttpService {

  constructor(private httpClinet: HttpClient) {}

  getDrugList(): Observable<DrugType[]> {
    // return this.httpClinet.get<DrugType[]>('');
    return of([
      {
        id: '1',
        pack: {
          activeAmmount: '500',
          activeUnitType: 'G',
          drugName: 'Calperos',
        },
        dosage: {doseAmount: 1,
          howOften: '24h',
          doseAmountUnit: 'PILL'
        }
      }
    ]);
  }
}
