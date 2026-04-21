import { Component } from '@angular/core';
import { CounterValue } from "./counter-value/counter-value";
import { CounterButton } from "./counter-button/counter-button";

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  public counter:number = 0;

  onIncrement(){
      this.counter++;
  }
  onDecrement(){
   if(this.counter == 0){
      return;
    }else{
      this.counter--;
    }
  }
  reset(){
    this.counter = 0;
  }

}
