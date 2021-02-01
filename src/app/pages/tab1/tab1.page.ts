import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { RespuestaTopHeadLines, Article } from '../../Interfaces/Interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
  // importo el OnInit 
export class Tab1Page implements OnInit {

  noticias: Article[] = [];
  // importo el servicio de noticias
  constructor(private NoticiasService: NoticiasService ) {}

  ngOnInit() {
   this.CargarNoticias();
  }


  loadData( event){

    this.CargarNoticias( event );
  }

  CargarNoticias(event?) {
    this.NoticiasService.getTopHeadlines()
    .subscribe(res => { // subscribe me permite traer la información y tengo que pasarle la resp(de la cual va tener un parametro)

      if (res.articles.length === 0){
        event.target.disabled = true;
        event.target.complete();
        return;
      }


      this.noticias.push( ...res.articles);

      if (event){
        event.target.complete();
      } // muestra la info al final del scroll
    });
  }
}
