import { Component, OnInit, OnDestroy} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Count } from '../state/counter.state';
import { getCount } from '../state/counter.seletor';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue implements OnInit, OnDestroy{
  constructor(private store: Store<{ counter: Count }>) {}
  count:number = 0;
  countSubscription: Subscription | null = null;

  ngOnInit(){
    this.countSubscription = this.store.pipe(select(getCount)).subscribe((count)=>{
       console.log('count subscription called');
       this.count = count;
    });
  }

  ngOnDestroy(): void {
    this.countSubscription?.unsubscribe();
  }
}
