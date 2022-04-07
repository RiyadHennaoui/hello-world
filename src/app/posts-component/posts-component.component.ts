import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent  {
  posts!: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts'; 
  result: any;
  titre: string ='';

  // constructor(private http: HttpClient){
  //   http.get(this.url)
  //   .subscribe(response => {
  //     console.log(response);
  //     this.posts = response as [];
  //     this.sortTabByIdDesc(this.posts);
  //   });
  // }

  constructor(private http: HttpClient){
    fetch(this.url)
    .then(response => response.json())
    .then(json => this.posts = json)
    .then(() => this.sortTabByIdDesc(this.posts));
    };
    
  

  createPost(input: HTMLInputElement){
      let post: any = { title: input.value};
    this.http.post(this.url,JSON.stringify(post))
    .subscribe(response => {
      post.id = (response as any).id;
      console.log(response, post.id, post);
      this.posts.push(post);
      this.titre = '';
      this.sortTabByIdDesc(this.posts);
    });
  }

  private sortTabByIdDesc(tab:any[]) {
    tab.sort((a,b) => b.id - a.id);
  }

  updatePost(post){

    this.http.patch(this.url + '/'+ post.id, JSON.stringify({ isRead: true}))
    .subscribe(response => {
      console.log(response);
    })
    // this.http.put(this.url, JSON.stringify(post));

  }

}
