import { Injectable } from '@angular/core';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private commentModal: any;  // Add a reference to the modal

  constructor() {}

  openCommentModal() {
    this.commentModal = new bootstrap.Modal(document.getElementById('commentModal'));
    this.commentModal.show();
  }

  closeCommentModal() {
    if (this.commentModal) {
      this.commentModal.hide();
    }
  }
}
