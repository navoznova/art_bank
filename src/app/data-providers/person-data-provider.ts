import { Injectable, NgModule } from '@angular/core';
import { Person } from '../Models/Person';
import personData from '../../assets/person.json';

// @Injectable()
export class PersonDataProvider {
  constructor() {
  }

  getAll():Person[]{
    return personData.map(x => new Person(x.name, x.card))
  }
}

