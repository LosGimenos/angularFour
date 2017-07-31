import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  id:number;
  name:string;

  @Input('hero') hero;

  constructor() { }

  ngOnInit() {
  }
}
