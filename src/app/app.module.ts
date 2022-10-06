import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsTableComponent } from './persons-table/persons-table.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { PersonDataProvider } from './data-providers/person-data-provider';

@NgModule({
  declarations: [
    AppComponent,
    PersonsTableComponent,
    DeleteButtonComponent,
    AddButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [PersonDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
