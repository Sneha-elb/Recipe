import { EventEmitter, Injectable } from '@angular/core';
import { recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipeSelected= new EventEmitter<recipe>();


  private recipes : recipe[] = [
    new recipe('paneer','shahi','https://static.toiimg.com/photo/53251884.cms'),
    new recipe('paneer','shahi','https://static.toiimg.com/photo/53251884.cms')
    ];

  getRecipes(){
    return this.recipes.slice(); //sends  a copy of recipe array
  }

}
