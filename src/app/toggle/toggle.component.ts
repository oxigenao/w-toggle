import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'w-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  modelValue = 0;
  @Output() modelChange = new EventEmitter();
  
  @Input()
  get model() {
    return this.modelValue;
  }
  
  set model(val) {
    if(val){
      this.modelValue = 1;
    }else{
      this.modelValue = 0;
    }
   
    this.modelChange.emit(this.modelValue);
  }

  constructor() { }

  

  ngOnInit() {
  }

}
