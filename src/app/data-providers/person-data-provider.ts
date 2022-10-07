import { Person } from '../Models/Person';
import personData from '../../assets/person.json';

export class PersonDataProvider {
  constructor() {
  }

  getAll(): Person[] {
    return personData.map(record => new Person(record.name, record.card))
  }
}

