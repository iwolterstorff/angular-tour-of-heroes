import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroes = HEROES;

  title = 'Mr. Potato Head';
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


const HEROES: Hero[] = [
	{id: 1, name: 'Claudia'},
	{id: 12, name: 'Fiona'},
	{id: 13, name: 'Bryce'},
	{id: 14, name: 'Eli'},
	{id: 15, name: 'Zaque'},
	{id: 16, name: 'Ryan'},
	{id: 666, name: 'Theresa'},
	{id: 18, name: 'Matt'},
	{id: 19, name: 'Justin'},
	{id: 20, name: 'Alican'},
	{id: 69, name: 'Ian'},
	{id: 55555, name: 'Clem'}
];
