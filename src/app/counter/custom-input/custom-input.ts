import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Count } from '../state/counter.state';
import { customIncrement, showCustomToggle } from '../state/counter.actions';
import { CommonModule } from '@angular/common';
import { getToggle } from '../state/counter.seletor';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput implements OnInit, OnDestroy{
  constructor(
    private store: Store<{counter: Count}>
  ){}
  public customValue!:number;
  public showCustomValue: boolean = false;
  private toggleSubscription: Subscription | null = null;

  ngOnInit(){
    this.toggleSubscription = this.store.pipe(select(getToggle)).subscribe((toggle)=>{
      console.log('toggle subscription called');
      this.showCustomValue = toggle;
    })

  }
  onCustomIncrement(){
    console.log(this.customValue)
    this.store.dispatch(customIncrement({value: this.customValue}));
    this.customValue = 0;
  }
  onShowCustomValue(){
    this.store.dispatch(showCustomToggle());
  }

  ngOnDestroy(): void {
    this.toggleSubscription?.unsubscribe();
  }
}