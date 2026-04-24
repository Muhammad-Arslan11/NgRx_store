import { Component, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue implements OnInit{
  constructor(private store: Store<{ counter: { count: number } }>) {}
  count:number = 0;

  ngOnInit(){
    console.log('oninit');
    this.store.pipe(select('counter')).subscribe((state)=>{
       this.count = state.count;
    });
  }
}
