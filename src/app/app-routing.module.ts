import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicModule} from './public/public.module';
import {AuthModule} from './auth/auth.module';
import {TrainingModule} from './training/training.module';

const routes: Routes = [
  {path: '', loadChildren: () => PublicModule},
  {path: 'auth', loadChildren: () => AuthModule},
  {path: 'training', loadChildren: () => TrainingModule}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
