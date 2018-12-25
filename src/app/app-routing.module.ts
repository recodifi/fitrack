import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicModule} from './public/public.module';
import {DashboardModule} from './dashboard/dashboard.module';

const routes: Routes = [
  {path: '', loadChildren: () => PublicModule},
  {path: 'dashboard', loadChildren: () => DashboardModule}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
