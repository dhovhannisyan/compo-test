import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/ui-kit/button/button.component';
import { TextInputComponent } from '../../shared/ui-kit/text-input/text-input.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { ToggleButtonComponent } from '../../shared/ui-kit/toggle-button/toggle-button.component';
import { CounterInputComponent } from '../../shared/counter-input/counter-input.component';
import { FaveButtonComponent } from '../../shared/ui-kit/fave-button/fave-button.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    ToggleButtonComponent,
    TextInputComponent,
    CarouselComponent,
    CounterInputComponent,
    FaveButtonComponent
  ],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent implements OnInit {

  imgPaths = [
    '../../../assets/images/carousel/product-1.png',
    '../../../assets/images/carousel/product-2.png',
    '../../../assets/images/carousel/product-3.png',
    '../../../assets/images/carousel/product-4.png',
  ]

  ngOnInit() {

  }

}
