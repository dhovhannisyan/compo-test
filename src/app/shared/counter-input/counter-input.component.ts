import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss'
})
export class CounterInputComponent {

  @Input() control: FormControl;
  @Input() counterValue: number = 0;
  @Input() text: string = '';
  @Input() range: number = 0;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  onValueChange(ev: number) {
    this.valueChange.emit(ev)
  }

  onIncrement() {
    this.counterValue += this.range;
    this.valueChange.emit(this.counterValue);
    if (this.control) {
      this.control.patchValue(this.counterValue)
    }
  }

  onDecrement() {
    if (this.counterValue >= this.range) {
      this.counterValue -= this.range;
      this.valueChange.emit(this.counterValue);
      if (this.control) {
        this.control.patchValue(this.counterValue)
      }
    }
  }

}
