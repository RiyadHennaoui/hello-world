import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world app';
  title1: string = ''; 

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: { newValue: FavoriteChangedEventArgs }){
    console.log("Favorite change: ", eventArgs); 
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  courses = [1, 2];

  coursesfor = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
  ]

  viewMode = 'something else';

}
