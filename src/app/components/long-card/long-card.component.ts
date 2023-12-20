import { Component } from '@angular/core';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrl: './long-card.component.css'
})
export class LongCardComponent {
  questionTitleArray = ['Codeberg - Fast Open Source Alternative to Github', 'Codeberg - Fast Open Source Alternative to Github'];
 
  trackQuestionTitle(index: number, questionTitle: string): string {
     return questionTitle;
  }
}
