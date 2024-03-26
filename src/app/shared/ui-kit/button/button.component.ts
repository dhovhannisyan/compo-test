import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() onClick: EventEmitter<Event> = new EventEmitter();


  onButtonClick(ev: Event) {
    this.onClick.emit(ev)
  }

}
