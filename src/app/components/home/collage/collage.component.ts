import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }

}
