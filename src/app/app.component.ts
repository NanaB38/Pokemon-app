import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  // vues définies dans le template, syst encapsylé 
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  // propriétés, méthodes, logique décrite dans la classe
  // on bloque l'objet pokemonList 
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  constructor() {
   // interdit de déclarer ici: this.pokemonList=[];
  }

  ngOnInit() {
    // par défaut void : méthode vide 
 console.table(this.pokemonList); 
  }
  // méthodes ici  
  // selectPokemon(event: MouseEvent) {
    // caster le type d'élément pour le click 
    //+() pour transformer en type nombre 
    // const index: number = +(event.target as HTMLInputElement).value;

    selectPokemon(pokemonId: string) { 
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name}`);   
    this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez cliqué sur un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
      // ces propriétés poussées dans le template à l'interpolation
    }
  }
  }
