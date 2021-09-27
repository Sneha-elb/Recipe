import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients : Ingredients[] =[
    new Ingredients('Apple',3),
    new Ingredients('orange',3)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredients :Ingredients){
    this.ingredients.push(ingredients);
    
  }
}
