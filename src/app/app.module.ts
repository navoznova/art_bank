import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsTableComponent } from './persons-table/persons-table.component';
import { PersonDataProvider } from './data-providers/person-data-provider';

@NgModule({
  declarations: [
    AppComponent,
    PersonsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [PersonDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
