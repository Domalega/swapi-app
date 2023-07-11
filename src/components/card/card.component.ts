import { Component, Input } from '@angular/core';
import { ModalService } from 'src/services/modalService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() planetData: any;

  constructor() {}

  isModalOpen: boolean = false;
}
