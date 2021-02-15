import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Interfaces/Interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Article[] = [];
  @Input() enFavoritos = false;
  constructor() { }

  ngOnInit() {}

}
