import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent  {
  @Input('likesCount') likesCount:number = 0;
  @Input('isActive') isActive: boolean = false;

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
