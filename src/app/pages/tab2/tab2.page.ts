import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment,  {static: true}) segment: IonSegment;

  categorias = ['Negocios', 'Entretenimiento', 'General', 'Salud', 'Ciencia', 'Deportes', 'Tecnología'];

  ngOnInit() {
    this.segment.value = this.categorias[0];
  }


}
