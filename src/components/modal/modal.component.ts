import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() modalOpen = false;
  @Input() url: any;
  @Output() modalOpenChange = new EventEmitter<boolean>();
  data: any;
  constructor(private peopleServices: DataService) {}

  ngOnInit() {
    this.peopleServices
      .getPeople(this.url)
      .then((data) => (this.data = data))
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  closeModal(): void {
    this.modalOpen = false;
    this.modalOpenChange.emit(this.modalOpen);
  }
}
