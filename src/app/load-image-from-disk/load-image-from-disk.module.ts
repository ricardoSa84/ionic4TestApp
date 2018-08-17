import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoadImageFromDiskPage } from './load-image-from-disk.page';

const routes: Routes = [
  {
    path: '',
    component: LoadImageFromDiskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoadImageFromDiskPage]
})
export class LoadImageFromDiskPageModule {}
