import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewsManagementService {
  private httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': environment.API_KEY,
      }),
    };
  }

  getLatestNews(country: String, topic: String) {
    return this.http.get(
      environment.API_URL +
        `/v2/latest_headlines?countries=${country}&topic=${topic}`,
      this.httpOptions
    );
  }
}
