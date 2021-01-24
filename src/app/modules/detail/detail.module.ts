import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const components = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatDividerModule,
  MatRippleModule,
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailRoutingModule, SharedModule, components],
})
export class DetailModule {}
