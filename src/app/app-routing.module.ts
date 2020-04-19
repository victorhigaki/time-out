import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'interval-timer',
    loadChildren: () =>
      import('./interval-timer/interval-timer.module').then(
        (m) => m.IntervalTimerModule
      ),
  },
  {
    path: '',
    redirectTo: '/interval-timer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
