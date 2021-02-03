import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const impot = [MatButtonModule, MatIconModule, MatRippleModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, impot],
  exports: [HeaderComponent],
})
export class SharedModule {}
