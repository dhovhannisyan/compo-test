import { Routes } from '@angular/router';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { UiKitComponent } from './pages/ui-kit/ui-kit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // Used Some Fake ID
    redirectTo: '/products/1'
  },
  {
    path: 'products/:id',
    component: ProductDetailsPageComponent
  },
  {
    path: 'ui-kit',
    component: UiKitComponent
  }
];
