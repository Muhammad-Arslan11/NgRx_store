import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();


}
