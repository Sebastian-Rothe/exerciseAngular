import { Component, inject } from '@angular/core';
import { PostInterface } from '../interfaces/post.interface';
import { SinglePostComponent } from './single-post/single-post.component';
import { SubscribersService } from '../services/subscribers.service';
import { SingleSubscriberComponent } from './single-subscriber/single-subscriber.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SinglePostComponent, SingleSubscriberComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  posts: PostInterface[] = [
    {
      name: 'banana',
      img: 'assets/imgForAngularInsta/img/banana.jpg',
      likes: 10,
      liked: false,
      comments: ['12423564'],
    },
    {
      name: 'currant',
      img: 'assets/imgForAngularInsta/img/currant.jpg',
      likes: 20,
      liked: false,
      comments: ['12423564'],
    },
    {
      name: 'orange',
      img: 'assets/imgForAngularInsta/img/orange.jpg',
      likes: 30,
      liked: false,
      comments: ['12423564', 'khkjhk'],
    },
  ];

  subscribers = inject(SubscribersService);


  addComment(newComment: string, i: number) {
    if (!this.posts[i].comments) {
      this.posts[i].comments = [];
    }
    this.posts[i].comments.push(newComment);
  }
}
