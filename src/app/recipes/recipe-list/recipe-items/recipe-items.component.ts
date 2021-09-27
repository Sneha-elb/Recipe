import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

@Input() Recipe !: recipe;
// @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
      // this.recipeSelected.emit();
      this.recipeService.recipeSelected.emit(this.Recipe);
  }
  
}
