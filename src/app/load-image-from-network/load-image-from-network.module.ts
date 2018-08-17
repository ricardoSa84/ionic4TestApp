import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoadImageFromNetworkPage } from './load-image-from-network.page';

const routes: Routes = [
  {
    path: '',
    component: LoadImageFromNetworkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoadImageFromNetworkPage]
})
export class LoadImageFromNetworkPageModule {}
