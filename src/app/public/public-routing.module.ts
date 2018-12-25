import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicComponent} from './public.component';
import {AuthModule} from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'auth', loadChildren: () => AuthModule}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
