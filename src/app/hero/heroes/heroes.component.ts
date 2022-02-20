import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';

import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public type: string = '';
  public versions: string = '';
  public arrHeroes: Array<Hero> = [];

  constructor(public heroes: HeroService) {}

  ngOnInit(): void {

    this.heroes.getJSON().subscribe((data) => {
      const info = data.data
      this.type = data.type;
      this.versions = data.version;
      for (const item in info) {
         let hero = new Hero(
          info[item].title,
          info[item].id,
          info[item].key,
          info[item].name)
        this.arrHeroes.push(hero);

      }
      this.rowData = this.getHeroes(this.arrHeroes)
    })
  }

  columnDefs: ColDef[] = [
        { field: 'id' , sortable: true, filter: true },
        { field: 'name' , sortable: true, filter: true },
        { field: 'title', sortable: true, filter: true },
        { field: 'key', sortable: true, filter: true }
    ];

 rowData: Observable<any[]> | undefined;


 getHeroes(arrHeroes: any) { return of(arrHeroes); }

}
