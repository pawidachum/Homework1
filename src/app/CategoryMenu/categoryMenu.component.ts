import { Component } from '@angular/core';
     @Component({
      selector: 'app-CategoryMenu',
      templateUrl: './categoryMenu.component.html',
      styleUrls: ['./categoryMenu.component.css']
     })
     export class CategoryMenuComponent {
     items = ["Fashion", "Sport", "Beauty", "Food", "Electronic"]

      constructor() {
      }

    
     }