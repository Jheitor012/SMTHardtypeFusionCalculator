import { SharedModule } from './../../shared/shared.module';
import { MainDemonsPageComponent } from './components/main-demons-page/main-demons-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemonsPageRoutingModule } from './main-demons-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';

const comp = [MatButtonModule, MatTableModule, MatTabsModule, MatRippleModule];

@NgModule({
  declarations: [MainDemonsPageComponent],
  imports: [CommonModule, MainDemonsPageRoutingModule, comp, SharedModule],
})
export class MainDemonsPageModule {}
