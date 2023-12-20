// modal-comment.component.ts

import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service'; // Update with the correct path

@Component({
  selector: 'app-modal-comment',
  templateUrl: './modal-comment.component.html',
  styleUrls: ['./modal-comment.component.css']
})
export class ModalCommentComponent {
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.closeModal();
  }
}
