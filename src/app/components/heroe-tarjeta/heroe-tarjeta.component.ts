import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;
  // @Output() heroeSelecionado: EventEmitter<number>;

  constructor( private router: Router) {
    // this.heroeSelecionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(): any {
    // this.heroeSelecionado.emit( this.index );
    this.router.navigate( ['/heroe', this.index] );
  }
}
