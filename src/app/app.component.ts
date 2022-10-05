import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // vues définies dans le template, syst encapsylé 
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
      <p> {{pokemonList}} </p>`
})

export class AppComponent implements OnInit {
  // propriétés, méthodes, logique décrite dans la classe
  title = 'appli de Pokemons';
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  constructor() {
   // interdit de déclarer ici: this.pokemonList=[];

  }

  ngOnInit() {
    // par défaut void : méthode vide 
 console.table(this.pokemonList); 
 
  };
}
