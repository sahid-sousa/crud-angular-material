import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Estado, Municipio} from './brasilapi.models';
@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseURL: string = 'https://brasilapi.com.br/api';

  //https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia

  constructor(private http: HttpClient) { }

  listarUFs() : Observable<Estado[]> {
    const path: string = '/ibge/uf/v1';
    return this.http.get<Estado[]>(this.baseURL + path)
  }

  listarMunicipios(uf: string) : Observable<Municipio[]> {
    const path: string = '/ibge/municipios/v1/' + uf;
    return this.http.get<Municipio[]>(this.baseURL + path);
  }
}
