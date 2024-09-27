import { Component, Input, Output } from '@angular/core';
import { PostInterface } from '../../interfaces/post.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post: PostInterface = {
    name: 'banana', img: 'assets/imgForAngularInsta/img/banana.jpg', likes: 10, liked: false
  };

  toggleLike(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes += 1 : post.likes -= 1;
  }



}
