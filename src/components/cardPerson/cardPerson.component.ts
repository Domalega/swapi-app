import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './cardPerson.component.html',
})
export class CardPersonComponent {
  @Input() person: any;
}
