import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/ui-kit/button/button.component';
import { SearchComponent } from '../search/search.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { FaveButtonComponent } from '../../shared/ui-kit/fave-button/fave-button.component';
import { ProfileButtonComponent } from '../profile-button/profile-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    SearchComponent,
    NotificationsComponent,
    FaveButtonComponent,
    ProfileButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  onSearchApplyed(search) {
    console.log(search);
  }
}
