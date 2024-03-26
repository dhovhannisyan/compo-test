import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bredcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './bredcrumbs.component.html',
  styleUrl: './bredcrumbs.component.scss'
})
export class BredcrumbsComponent {

}
