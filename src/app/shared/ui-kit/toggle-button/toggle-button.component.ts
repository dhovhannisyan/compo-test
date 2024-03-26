import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {

  @Input() size: 'large' | 'small' = 'large';
  @Input() toggleButtonValue: boolean = false;
  @Input() toggleButtonControl: FormControl;

  @Output() valueChange:EventEmitter<Event>  = new EventEmitter()

  onChange(ev: Event) {
    this.valueChange.emit(ev)
  }

}
