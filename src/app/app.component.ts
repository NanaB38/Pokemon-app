import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  // vues définies dans le template, syst encapsylé 
  template: `
      <h1>
        Liste de Pokemons
      </h1>
      <!-- <ul>
        <li>{{pokemonList}}</li>
      </ul> -->     `
})

export class AppComponent implements OnInit {
  // propriétés, méthodes, logique décrite dans la classe
  // on bloque l'objet pokemonList 
  pokemonList: Pokemon[] = POKEMONS;

  constructor() {
   // interdit de déclarer ici: this.pokemonList=[];
  }

  ngOnInit() {
    // par défaut void : méthode vide 
 console.table(this.pokemonList); 
 this.selectPokemon(this.pokemonList[2]);
  }
  // méthode 
  selectPokemon(pokemon: Pokemon) {
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name}`);  
  }
  }
