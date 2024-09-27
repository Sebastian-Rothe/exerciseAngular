import { Component } from '@angular/core';
import { PostInterface } from '../interfaces/post.interface';
import { SinglePostComponent } from './single-post/single-post.component';




@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ SinglePostComponent ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  posts: PostInterface[] = [
    {
      name: 'banana', img: 'assets/imgForAngularInsta/img/banana.jpg', likes: 10, liked: false
    },
    {
      name: 'currant', img: 'assets/imgForAngularInsta/img/currant.jpg', likes: 20, liked: false
    },
    {
      name: 'orange', img: 'assets/imgForAngularInsta/img/orange.jpg', likes: 30, liked: false
    },
  ]

  

}
