
import { Component,OnInit } from '@angular/core';
import {PersonajesService} from 'src/app/services/personajes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonajesService]
})
export class AppComponent implements OnInit {

    title = 'marvelapp';
    personajet="null";

constructor(private personajesService: PersonajesService){}
///personajesService.getPersonajes()
//.subscribe(personajet=>{
//debugger;
////this.personajet=personajet;

//});


ngOnInit(){
  this.personajesService.getPersonajes().subscribe(
    (data)=>{console.log(data)},
    (error)=>{console.error(error)},
    ()=>{console.log("terminado")}
    
    );
} 

      }

