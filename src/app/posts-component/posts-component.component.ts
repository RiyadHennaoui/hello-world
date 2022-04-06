import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent  {
  posts!: any;

  constructor(http: HttpClient){
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

}
