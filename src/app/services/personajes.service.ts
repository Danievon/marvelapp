import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/throw';

@Injectable(
  {providedIn: 'root'}
)
export class PersonajesService {

public urlm: string = "https://gateway.marvel.com:443/v1/public/characters?&apikey=58f5c085969b107d1c66315e3eef157f";

constructor(private _http: HttpClient) { }

getPersonajes():Observable<any>{
return this._http.get<any>(this.urlm)
.do(data=>console.log('All: '+JSON.stringify(data)))
///do ayuda imprimir por consola las respuestas
.catch(this.handleError);

}
private handleError(err: HttpErrorResponse){
console.log(err.message);
return Observable.throw(err.message);
}
}
