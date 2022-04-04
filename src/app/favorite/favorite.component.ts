import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
//   styles: [
    
//     `
//       .glyphicon {
//     color: red;
// }
//     `
//   ]
})
export class FavoriteComponent  {
  @Input('isFavorite') isSelected: boolean = false;
  @Output('change') click = new EventEmitter();
  constructor() { }

  

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
