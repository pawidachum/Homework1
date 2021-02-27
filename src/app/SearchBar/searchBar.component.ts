import { Component, Input } from '@angular/core';
     @Component({
      selector: 'app-searchBar',
      templateUrl: './searchBar.component.html',
      styleUrls: ['./searchBar.component.css']
     })
     export class SearchBarComponent {
     @Input()
          searchtext: string | undefined;
      constructor() {}
     search(value: string | undefined){
          
          this.searchtext = value;
     }
    
     }