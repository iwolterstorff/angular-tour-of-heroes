import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
        {id: 0, name: "Mr. Potato Head"},
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
    return {heroes};
  }
}
