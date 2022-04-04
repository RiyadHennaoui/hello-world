import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  courses;

  loadCourses(){
    this.courses = [
      {id: 1, name: 'course 1'},
      {id: 2, name: 'course 2'},
      {id: 3, name: 'course 3'},
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined; 
  }
  

}
