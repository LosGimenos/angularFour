import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import HEROES from '../../mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
   heroes:any[];
   selectedHero:HeroComponent;

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelect(hero:HeroComponent): void {
      this.selectedHero = hero;
    }
}
