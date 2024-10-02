import { Component, inject } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
@Component({
  selector: 'app-single-subscriber',
  standalone: true,
  imports: [],
  templateUrl: './single-subscriber.component.html',
  styleUrl: './single-subscriber.component.scss'
})
export class SingleSubscriberComponent {

  subscribers = inject(SubscribersService);
}
