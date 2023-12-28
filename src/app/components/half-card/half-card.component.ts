// half-card.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-card',
  templateUrl: './half-card.component.html',
  styleUrls: ['./half-card.component.css']
})
export class HalfCardComponent implements OnInit{
  questionTitleArray = ['Codeberg - Fast Open Source Alternative to Github', 'NZ\'s biggest data breach show retention is the sleeping giant of data security'];

  trackQuestionTitle(index: number, questionTitle: string): string {
    return questionTitle;
  }

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
