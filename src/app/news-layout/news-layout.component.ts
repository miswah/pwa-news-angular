import { Component, OnInit } from '@angular/core';
import { NewsManagementService } from '../services/news-management.service';
import { map, tap } from 'rxjs';
import { News } from '../helpers/news';

@Component({
  selector: 'app-news-layout',
  templateUrl: './news-layout.component.html',
  styleUrls: ['./news-layout.component.scss'],
})
export class NewsLayoutComponent implements OnInit {
  public latestNews: News[] = [];
  public news: News[] = [];
  constructor(private newsManagement: NewsManagementService) {}

  ngOnInit(): void {
    this.newsManagement
      .getLatestNews('US', 'business')
      .pipe(map((x: any) => x.articles))
      .subscribe((data: News[]) => {
        this.latestNews = data.slice(0, 5);
        this.news = data.slice(5, -1);
      });
  }
}
