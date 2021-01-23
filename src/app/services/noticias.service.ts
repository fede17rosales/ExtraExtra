import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // importo el componente HttpClient de la common
  constructor(private http: HttpClient) { }
    
    getTopHeadlines() {
      return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=9af975a277674f9789b24b46da5072e2`);
    } // creo la funcion para conseguir la info, <RespuestaTopHeadLines> -> es de tipo observable y la importo desde interface

 
}
