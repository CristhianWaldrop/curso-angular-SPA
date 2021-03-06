import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor( private heroesService: HeroesService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  // verHeroe(idx: number): any {
  //   this.router.navigate( ['/heroe', idx] );
  // }
}
