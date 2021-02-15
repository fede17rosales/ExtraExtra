import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../Interfaces/Interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment,  {static: true}) segment: IonSegment;

  categorias = ['business' , 'entertainment' , 'general' , 'health' , 'science' , 'sports' , 'technology'];
  noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.CargarNoticias(this.categorias[0]);
  }

  cambioCategoria( event) {

    this.noticias = [];
    this.CargarNoticias(event.detail.value);
  }

  CargarNoticias( categoria: string, event?){
    this.noticiasService.getTopHeadLinesCategorias(categoria)
    .subscribe(res =>{
      console.log(res);
      this.noticias.push(...res.articles);

      if (event){
        event.target.complete();
      }
    });
  }

  loadData(event) {

    this.CargarNoticias(this.segment.value,event);

  }
}
