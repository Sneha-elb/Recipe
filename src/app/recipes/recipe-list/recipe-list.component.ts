import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<recipe>();
  recipes !: recipe[] ;
  // recipes : recipe[] = [
  //   new recipe('paneer','shahi','https://static.toiimg.com/photo/53251884.cms'),
  //   new recipe('paneer','shahi','https://static.toiimg.com/photo/53251884.cms')
  //   ]; //prior to adding services

  constructor(private recipService: RecipeService) { }

  ngOnInit(){
    this.recipes=this.recipService.getRecipes();
  }

  // onRecipeSelected(Recipe: recipe){
  //     this.recipeWasSelected.emit(Recipe);
  // }
}
