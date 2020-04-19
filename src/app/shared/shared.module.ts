import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [];

const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [modules, components],
})
export class SharedModule {}
