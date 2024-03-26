import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fave-button',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './fave-button.component.html',
  styleUrl: './fave-button.component.scss'
})
export class FaveButtonComponent {

  @Input() faveButtonControl: FormControl;
  @Input() faveButtonValue: boolean = false;
  @Input() size: 'large' | 'small' = 'small';
  @Input() id: string;

  @Output() valueChange:EventEmitter<Event>  = new EventEmitter()

  onChange(ev: Event) {
    this.valueChange.emit(ev)
  }

}
