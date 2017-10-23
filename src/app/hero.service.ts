import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroesComponent } from './heroes.component';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	// to simulate a slow connection
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// latency: 2 seconds delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
}
