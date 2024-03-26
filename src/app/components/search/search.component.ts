import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  control: FormControl = new FormControl('');

  @Input() disabled: boolean = false;

  @Output() applyed: EventEmitter<Event> = new EventEmitter();

  ngOnInit() {}

  onRemove() {
    this.control.patchValue('');
  }

  onApply() {
    this.applyed.emit(this.control.value.trim());
  }

}
