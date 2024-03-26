import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui-kit/button/button.component';
import { TextInputComponent } from '../../shared/ui-kit/text-input/text-input.component';
import { FaveButtonComponent } from '../../shared/ui-kit/fave-button/fave-button.component';
import { ToggleButtonComponent } from '../../shared/ui-kit/toggle-button/toggle-button.component';

@Component({
  selector: 'app-ui-kit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextInputComponent,
    FaveButtonComponent,
    ToggleButtonComponent
  ],
  templateUrl: './ui-kit.component.html',
  styleUrl: './ui-kit.component.scss'
})
export class UiKitComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      input: ['', Validators.required],
      faveButton: [false],
      toggleButton: [false],
    })
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }

  onClick(ev: Event) {
    console.log(ev.target);
  }

  onInputValueChange(ev: Event) {
    console.log(ev.target['value']);
  }
}
