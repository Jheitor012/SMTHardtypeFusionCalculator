import { SharedModule } from './../../shared/shared.module';
import { MainDemonsPageComponent } from './components/main-demons-page/main-demons-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemonsPageRoutingModule } from './main-demons-page-routing.module';

@NgModule({
  declarations: [MainDemonsPageComponent],
  imports: [CommonModule, MainDemonsPageRoutingModule, SharedModule],
})
export class MainDemonsPageModule {}
