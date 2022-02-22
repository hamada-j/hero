import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero/hero.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { DataInMemoryWebApiService } from './data--in-memory-web-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    InMemoryWebApiModule.forRoot(DataInMemoryWebApiService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function DataInMemoryWebApiServicee(DataInMemoryWebApiServicee: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

