import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', 
    template: `
    <h2>{{ getTitle() }}</h2>

    <!-- <input (keyup.enter)="onKeyUp()"/> -->
    <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/> -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

        <button [style.backgroudColor]="isActive ? 'bleu' : 'white'">Save1</button>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save2</button>
        </div>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>

    <img src="{{ imageUrl}}" />
    <img [src]="title"/>
<div>

    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number:'1.1-1'}} <br/>
    {{ course.price | currency:'EUR':true:'3.2-2'}} <br/>
    {{ course.releaseDate | date:'shortDate'}} <br/>
    
</div>

<div>
    {{text | summary:10}}
</div>
    `  
})

export class CoursesComponent {

    title = "Title: List of Courses";
    courses;
    isActive = false;
    email = "me@exemple.com";

    constructor(service: CoursesService ){
        this.courses = service.getCourses(); 
    }

    getTitle(){
        return this.title;
    }

    // Logic for calling an HTTP Endpoint

    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked(){
        console.log("Div was clicked"); 
    }

    // onKeyUp(){
    //     console.log("Enter was pressed");
    // }
    onKeyUp(){
        console.log(this.email);
    }

    course= {

        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 3000,
        price: 190.90,
        releaseDate: new Date(2022,4,4)

    }

    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non consequatur facere sunt? Possimus laborum culpa minus corporis error, veniam ad modi voluptatum magnam dolorum nulla unde non dignissimos delectus?"

}