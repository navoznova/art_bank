import { Injectable, NgModule } from '@angular/core';
import { Person } from '../Models/Person';
import personData from '../../assets/person.json';
import { Directive } from '@angular/core';

// @Injectable()
export class PersonDataProvider {
  constructor() {
    console.log(personData);
  }

  getAll():Person[]{
    return personData.map(x => new Person(x.name, x.card))
  }
}

