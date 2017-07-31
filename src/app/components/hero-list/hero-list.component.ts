import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
   heroes:Hero[];
   selectedHero:Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
   ) { }

  getHeroes(): void {
    this.heroService.getHeroes()
                    .then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero): void {
      this.selectedHero = hero;
    }

   goToDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
   }
}
