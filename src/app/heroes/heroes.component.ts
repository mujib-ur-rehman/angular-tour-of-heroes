import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes = HEROES;
  constructor() {}
  // onSubmit(data: any) {
  //   this.hero.name = data;
  // }

  onselect(data: any) {
    this.selectedHero = data;
  }

  ngOnInit(): void {}
}
