import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isModalOpenSubject = new BehaviorSubject<boolean>(false);
  public isModalOpen$ = this.isModalOpenSubject.asObservable();

  constructor() {}

  public openModal(): void {
    this.isModalOpenSubject.next(true);
  }

  public closeModal(): void {
    this.isModalOpenSubject.next(false);
  }
}
