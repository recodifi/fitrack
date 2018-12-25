import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {TrainingModule} from './training/training.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'trainings', loadChildren: () => TrainingModule}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
