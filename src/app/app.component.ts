import { Component } from '@angular/core';
import { PokemonIdentfication, PokemonIdentificationService, PokemonPool } from 'angelolapus-pokemon-service';
import { PokemonPoolService } from 'angelolapus-pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angelo-pokemon-service';

  constructor(private pokemonPoolService:PokemonPoolService, private pokemonIdentificationService: PokemonIdentificationService){
    this.pokemonPoolService.getAllPokemon().subscribe((response: PokemonPool)=>{
      console.log('response: ', response);
    },(error:any)=>{
      console.log('error: ', error);
    });

    this.getPokemon('charizard');
  }

  getPokemon(name:string){
    this.pokemonIdentificationService.getPokemon(name).subscribe((response:PokemonIdentfication)=>{
      console.log('pokemon: ', response);
    },(error:any)=>{
      console.log('error: ', error);
    })
  }
}
