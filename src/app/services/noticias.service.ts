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

  HeadLinesPages = 0;

  categoriaActual = '';
  categoriaPage = 0;

  // importo el componente HttpClient de la common
  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

    getTopHeadlines() {
      this.HeadLinesPages ++;
      // tslint:disable-next-line: max-line-length
      return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ar&page=${ this.HeadLinesPages }`);
    } // creo la funcion para conseguir la info, <RespuestaTopHeadLines> -> es de tipo observable y la importo desde interface

    getTopHeadLinesCategorias( categoria: string) {
      if ( this.categoriaActual === categoria){
        this.categoriaPage++;
      }else {
        this.categoriaPage = 1;
        this.categoriaActual = categoria;
      }

      return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=ar&category=${ categoria }&page=${ this.categoriaPage }`);
  }
}
