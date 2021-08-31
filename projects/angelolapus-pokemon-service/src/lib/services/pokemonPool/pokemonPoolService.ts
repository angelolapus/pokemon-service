import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PokemonPool } from '../../interface/pokemonPool';
@Injectable({
  providedIn: 'root'
})
export class PokemonPoolService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemon():Observable<PokemonPool>{
    return this.httpClient.get<PokemonPool>('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200');
  }

}
