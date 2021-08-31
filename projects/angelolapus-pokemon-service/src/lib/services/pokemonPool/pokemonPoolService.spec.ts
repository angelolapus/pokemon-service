import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { PokemonPool } from '../../interface/pokemonPool';
import { mockPokemonPoolResponse } from './pokemonPoolMock';
import { PokemonPoolService } from './pokemonPoolService';



describe('PokemonPoolService', () => {
  let service: PokemonPoolService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule, HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonPoolService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return pokemon pool object', ()=> {

    service.getAllPokemon().subscribe((response:PokemonPool) => {
      expect(response.results[0].name).toEqual('unown');
      expect(response.results[1].name).toEqual('wobbuffet');
      expect(response.count).toBeGreaterThan(0);
    });



    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPokemonPoolResponse);
    httpTestingController.verify();
  });
});
