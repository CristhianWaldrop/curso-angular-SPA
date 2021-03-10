import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
import { HeroesService } from 'src/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html'
})
export class BuscarHeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute)
    {
      this.activatedRoute.params.subscribe( params => {
        this.heroes = this.heroesService.buscarHeroe(params.termino);
      });
    }

  ngOnInit(): void { }

  // verHeroe2(idx: number): any {
  //   this.router.navigate( ['/heroe', idx] );
  // }

}
