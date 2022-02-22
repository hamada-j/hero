import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  // public getJSON(): Observable<any> {
  //   return this.httpClient.get("../../assets/data/champion_info.json");
  // }

  public getHeroes(arrHeroes: any) { return of(arrHeroes); }

  public getPolicies(){
       return this.httpClient.get(this.SERVER_URL + 'policies');
  }

  public getPolicy(policyId: any){
       return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`);
  }
  public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'policies'}`, policy)
  }

  public deletePolicy(policyId: any){
      return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
  }
  public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
  }



}
