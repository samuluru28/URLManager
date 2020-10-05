import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermisionsComponent } from './permisions/permisions.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings',component:SettingsComponent},
  {path:'permissions',component: PermisionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
