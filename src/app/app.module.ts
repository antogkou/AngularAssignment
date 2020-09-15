import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MagicFormModule } from './magic-form/magic-form.module';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { MagicFormComponent } from './magic-form/magic-form/magic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'countries-list', component: CountriesListComponent },
  { path: 'magic-form', component: MagicFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    HttpClientModule,
    NgbModule,
    MagicFormModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
