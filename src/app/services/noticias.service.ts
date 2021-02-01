import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../Interfaces/Interfaces';
import { environment } from '../../environments/environment.prod';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // importo el componente HttpClient de la common
  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

    getTopHeadlines() {
      // tslint:disable-next-line: max-line-length
      // return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=9af975a277674f9789b24b46da5072e2`);
     return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ar`);
    } // creo la funcion para conseguir la info, <RespuestaTopHeadLines> -> es de tipo observable y la importo desde interface

    getTopHeadLinesCategorias( categoria: string) {
    //  return this.http.get(`http://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=9af975a277674f9789b24b46da5072e2`);
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ar&category=${ categoria }`);
  }
}
