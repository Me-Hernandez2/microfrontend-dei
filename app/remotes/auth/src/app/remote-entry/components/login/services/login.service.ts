import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    return this.http.get( 'https://pokeapi.co/api/v2/pokemon/pikachu')
      .pipe(
        map((response: any) => {
          const responseLogin: any = {
            name: response.forms[0].name,
          };
          return responseLogin;
        })
      );
  }
}
