import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit(): void {
  	this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	//this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}