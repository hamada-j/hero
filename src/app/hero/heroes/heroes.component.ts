import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';


import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { columnDefsArray } from '../model/columnDefs'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public type: string = '';
  public versions: string = '';
  public arrHeroes: Array<Hero> = [];

  policies: any[] = [];

  constructor(public heroes: HeroService) {}

  ngOnInit(): void {
    // this.heroes.getJSON().subscribe((data) => {
    //   const info = data.data
    //   this.type = data.type;
    //   this.versions = data.version;
    //   for (const item in info) {
    //      let hero = new Hero(
    //       info[item].title,
    //       info[item].id,
    //       info[item].key,
    //       info[item].name)
    //     this.arrHeroes.push(hero);
    //   }
    //   this.rowData = this.heroes.getHeroes(this.arrHeroes);
    // })

    this.heroes.getPolicies().subscribe((data: any)=>{
        console.log(data);
       const info = data[0]
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
        this.rowData = this.heroes.getHeroes(this.arrHeroes);
    })
  }

  columnDefs: ColDef[] = columnDefsArray();
  rowData: Observable<any[]> | undefined;

}
