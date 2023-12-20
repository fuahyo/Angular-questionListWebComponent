// modal.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showModal$: Observable<boolean> = this.showModalSubject.asObservable();

  constructor() {}

  openModal() {
    this.showModalSubject.next(true);
  }

  closeModal() {
    this.showModalSubject.next(false);
  }
}
