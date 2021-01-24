import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';



@NgModule({
  declarations: [
      NoticiasComponent,
      NoticiaComponent], // declaramos el Noticias y NoticiaComponent
  exports: [
    NoticiasComponent // exporto el NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule // importo el modulo de Ionic
  ]
})
export class ComponentsModule { }
