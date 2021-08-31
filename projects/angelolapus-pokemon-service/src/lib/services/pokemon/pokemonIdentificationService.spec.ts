import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonIdentfication } from '../../interface/pokemonIdentification';
import * as pokemonIdentificationData from './pokemonIdentificationMock.json';
import { PokemonIdentificationService } from './pokemonIdentificationService';

describe('PokemonPoolService', () => {
  let service: PokemonIdentificationService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule, HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonIdentificationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return pikachu identification', ()=> {

    service.getPokemon('pikachu').subscribe((response:PokemonIdentfication) => {
      expect(response.forms[0].name).toEqual('pikachu');
    });

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(req.request.method).toEqual('GET');
    req.flush(pokemonIdentificationData);
    httpTestingController.verify();
  });
});
