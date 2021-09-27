import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRefer !: ElementRef;
  @ViewChild('amountInput') amountInputRefer !: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRefer.nativeElement.value;
    const ingAmount = this.amountInputRefer.nativeElement.value;
    const newIngredient =new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
