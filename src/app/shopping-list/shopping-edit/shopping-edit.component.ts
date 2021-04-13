import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingrIndex: number;

  @ViewChild('name') nameIngr: ElementRef;
  @ViewChild('amount') quantityIngr: ElementRef;
  @ViewChild('massUnit') massUnitIngr: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onCreateIngredient() {
    const newIngredient = new Ingredient(
      this.nameIngr.nativeElement.value,
      this.quantityIngr.nativeElement.value,
      this.massUnitIngr.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
