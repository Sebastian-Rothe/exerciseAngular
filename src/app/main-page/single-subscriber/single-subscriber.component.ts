import { Component, inject } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';

import { NgClass } from '@angular/common';
@Component({
  selector: 'app-single-subscriber',
  standalone: true,
  imports: [NgClass],
  templateUrl: './single-subscriber.component.html',
  styleUrl: './single-subscriber.component.scss'
})
export class SingleSubscriberComponent {

  subscribers = inject(SubscribersService);

  toggleFollow(index: number){
    this.subscribers.toggleFollow(index)
  }
}
