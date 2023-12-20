// half-card.component.ts

import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service'; // Update with the correct path

@Component({
  selector: 'app-half-card',
  templateUrl: './half-card.component.html',
  styleUrls: ['./half-card.component.css']
})
export class HalfCardComponent {
  questionTitleArray = ['Codeberg - Fast Open Source Alternative to Github', 'NZ\'s biggest data breach show retention is the sleeping giant of data security'];

  constructor(private modalService: ModalService) {}

  trackQuestionTitle(index: number, questionTitle: string): string {
    return questionTitle;
  }

  openModal() {
    this.modalService.openModal();
  }
}
