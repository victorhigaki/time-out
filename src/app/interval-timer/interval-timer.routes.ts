import { Routes } from '@angular/router';

import { IntervalTimerComponent } from './interval-timer.component';

export const routes: Routes = [
  { path: '', component: IntervalTimerComponent, pathMatch: 'full' },
];
