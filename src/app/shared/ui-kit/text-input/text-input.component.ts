import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {

  @Input() inputControl: FormControl;

  @Input() inputValue: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() disabled: boolean = false;
  @Input() inputId: string = '';

  @Output() valueCange: EventEmitter<Event> = new EventEmitter();

  onInputValueChange(ev: Event) {
    this.valueCange.emit(ev)
  }

}
