import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() createIngredient = new EventEmitter<Ingredient>();
  @Input() ingrIndex: number;

  @ViewChild('name') nameIngr: ElementRef;
  @ViewChild('amount') quantityIngr: ElementRef;
  @ViewChild('massUnit') massUnitIngr: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onCreateIngredient() {
    this.createIngredient.emit(
      new Ingredient(
        this.nameIngr.nativeElement.value,
        this.quantityIngr.nativeElement.value,
        this.massUnitIngr.nativeElement.value
      )
    );
  }
}
