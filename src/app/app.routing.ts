import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const appRoutes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
