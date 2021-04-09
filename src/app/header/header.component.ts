import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() onLoadRecipes = new EventEmitter<'recipes' | 'shoppingList'>();

  constructor() {}

  ngOnInit(): void {}

  loadRecipes() {
    this.onLoadRecipes.emit('recipes');
  }

  loadShoppingList() {
    this.onLoadRecipes.emit('shoppingList');
  }
}
