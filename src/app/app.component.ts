import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hacker-news';

  constructor(private httpClient: HttpClient) {}
  data: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .subscribe(
        (data: any) => {
          console.log(data);
          this.data = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
