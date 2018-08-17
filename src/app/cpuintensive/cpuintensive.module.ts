import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CPUIntensivePage } from './cpuintensive.page';

const routes: Routes = [
  {
    path: '',
    component: CPUIntensivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CPUIntensivePage]
})
export class CPUIntensivePageModule {}
