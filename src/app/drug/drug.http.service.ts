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
          activeUnitType: 'mg',
          drugName: 'Calperos',
          producer: 'Teva Pharmaceuticals Polska'
        },
        dosage: {
          doseAmount: 1,
          howOften: '24h',
          doseAmountUnit: 'pill'
        }
      },
      {
        id: '2',
        pack: {
          activeAmmount: '100 + 10',
          activeUnitType: 'mg',
          drugName: 'Magne B6 Forte',
          producer: 'Sanofi-Aventis Sp. z o.o.'
        },
        dosage: {
          doseAmount: 1,
          howOften: '24h',
          doseAmountUnit: 'pill'
        }
      }
    ]);
  }
}
