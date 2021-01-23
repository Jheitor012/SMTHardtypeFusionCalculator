import { MainDemonsPageComponent } from './components/main-demons-page/main-demons-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemonsPageRoutingModule } from './main-demons-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

const comp = [MatButtonModule, MatTableModule];

@NgModule({
  declarations: [MainDemonsPageComponent],
  imports: [CommonModule, MainDemonsPageRoutingModule, comp],
})
export class MainDemonsPageModule {}
