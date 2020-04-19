import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { IntervalTimerComponent } from './interval-timer.component';
import { routes } from './interval-timer.routes';

@NgModule({
  declarations: [IntervalTimerComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class IntervalTimerModule {}
