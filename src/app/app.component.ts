import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroes = HEROES;

  title = 'Tour of Heroes';
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


const HEROES: Hero[] = [
	{id: 11, name: 'Claudia'},
	{id: 12, name: 'Fiona'},
	{id: 13, name: 'Bryce'},
	{id: 14, name: 'Eli'},
	{id: 15, name: 'Zaque'},
	{id: 16, name: 'Ryan'},
	{id: 17, name: 'Theresa'},
	{id: 18, name: 'Matt'},
	{id: 19, name: 'Justin'},
	{id: 20, name: 'Alican'}
];
