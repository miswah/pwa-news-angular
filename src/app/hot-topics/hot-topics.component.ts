import { Component, Input } from '@angular/core';
import { News } from '../helpers/news';

@Component({
  selector: 'app-hot-topics',
  templateUrl: './hot-topics.component.html',
  styleUrls: ['./hot-topics.component.scss'],
})
export class HotTopicsComponent {
  @Input() news: News[] = [];
}
