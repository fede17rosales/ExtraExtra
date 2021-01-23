import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { RespuestaTopHeadLines } from '../../Interfaces/Interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
  // importo el OnInit 
export class Tab1Page implements OnInit {

  // importo el servicio de noticias
  constructor(private NoticiasService: NoticiasService ) {}

  ngOnInit() {
    this.NoticiasService.getTopHeadlines()
    .subscribe(res =>{ // subscribe me permite traer la información y tengo que pasarle la resp(de la cual va tener un parametro)
      console.log('noticias', res);
    })
  }
}
