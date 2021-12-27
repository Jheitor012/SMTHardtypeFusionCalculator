import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
