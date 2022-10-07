import { Component, OnInit } from '@angular/core';
import { PersonDataProvider as PersonDataProvider } from '../data-providers/person-data-provider';
import { Person } from '../Models/Person';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css']
})
export class PersonsTableComponent implements OnInit {
  private personDataProvider: PersonDataProvider = new PersonDataProvider;
  public persons: Person[] = [];
  lastName: string = '';
  card: string = '';

  constructor() { }

  ngOnInit(): void {
    this.persons = this.personDataProvider.getAll();
  }

  deleteRow(index: number) {
    this.persons.splice(index, 1);
  }

  addRow(lastName: string, card: string) {
    let newPerson = new Person(lastName, card)
    this.persons.push(newPerson);

    this.lastName = '';
    this.card = '';
  }
}
