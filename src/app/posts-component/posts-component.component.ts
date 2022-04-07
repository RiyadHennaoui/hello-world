import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts!: any[];
   
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

  constructor(private service: PostService){
   
    };

    ngOnInit(): void {
      this.service.getPosts()
      .subscribe(response => {
        console.log(response);
        this.posts = response as [];
        this.sortTabByIdDesc(this.posts);
      });
    }

    // ngOnInit(): void {
    //   fetch(this.service.getUrl)
    //   .then(response => response.json())
    //   .then(json => this.posts = json)
    //   .then(() => this.sortTabByIdDesc(this.posts));
    // }
    
  

  createPost(input: HTMLInputElement){
      let post: any = { title: input.value};
    this.service.createPost(post)
    .subscribe(response => {
      post.id = (response as any).id;
      console.log(response, post.id, post);
      this.posts.push(post);
      this.titre = '';
      this.sortTabByIdDesc(this.posts);
    },
    (error: Response) => {
      if(error.status === 400){
        // this.form.setErrors(error.json())
      }else{
        throw error;
      }
    });
  }

  private sortTabByIdDesc(tab:any[]) {
    tab.sort((a,b) => b.id - a.id);
  }

  updatePost(post){

    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    })
    //this.http.put(this.url, JSON.stringify(post));

  }

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post); 
      this.posts.splice(index, 1);
    },
    (error: Response) => { 
      if(error.status === 404)
        alert ('This post has already been deleted')
      else throw error;
       
    })
  }

}
