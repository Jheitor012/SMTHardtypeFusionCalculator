import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

const importModules = [
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, importModules],
  exports: [HeaderComponent, importModules],
})
export class SharedModule {}
