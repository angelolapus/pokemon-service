import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonIdentfication } from "../../interface/pokemonIdentification";


@Injectable({
  providedIn:'root'
})
export class PokemonIdentificationService{

  constructor(private httpClient: HttpClient){

  }

  getPokemon(name: string):Observable<PokemonIdentfication>{
    return this.httpClient.get<PokemonIdentfication>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
