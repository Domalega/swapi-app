import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() modalOpen = false;
  @Input() url: any;
  @Output() modalOpenChange = new EventEmitter<boolean>();

  data: any;
  dataIsLoading: boolean = true;

  constructor(private peopleServices: DataService) {}

  async getData() {
    try {
      const data = await this.peopleServices.getPeople(this.url);
      this.data = data;
      this.dataIsLoading = false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  ngOnInit(): void {
    this.getData;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.modalOpenChange.emit(this.modalOpen);
  }
}
