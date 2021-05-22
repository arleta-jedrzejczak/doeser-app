import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DrugListHttpService {

  constructor(private httpClinet: HttpClient) {}

  getDrugList() {
    return this.httpClinet.get<any[]>('');
  }
}
