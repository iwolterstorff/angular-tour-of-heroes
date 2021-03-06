import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroesComponent } from './heroes.component';

@Injectable()
export class HeroService {
	// getHeroes(): Promise<Hero[]> {
	// 	return Promise.resolve(HEROES);
	// }

	constructor(private http: Http) {}

	private heroesUrl = 'api/heroes'; // URL to web api


	getHeroes(): Promise<Hero[]> {
  		return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	// to simulate a slow connection
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// latency: 2 seconds delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.toPromise
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}
}
