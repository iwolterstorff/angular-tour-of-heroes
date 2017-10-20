import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
  	id: 1,
  	name: 'Mr. Potato Head'
  };
}

export class Hero {
	id: number;
	name: string;
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

heroes = HEROES;