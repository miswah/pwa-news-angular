import { Component, Input } from '@angular/core';
import { News } from '../helpers/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() news: News[] = [];
}
