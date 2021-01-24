import { MagatamaModel } from './../../../../../assets/model/all-models';
import { DemonsService } from './../../../../services/demons.service';
import { Component, OnInit } from '@angular/core';
import { DemonsModel } from 'src/assets/model/all-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-demons-page',
  templateUrl: './main-demons-page.component.html',
  styleUrls: ['./main-demons-page.component.css'],
})
export class MainDemonsPageComponent implements OnInit {
  demonsArray: DemonsModel[];
  magatamaArray: MagatamaModel[];

  columnsDisplayDemons = ['race', 'name'];
  columnsDisplayMagatamas = ['name', 'location'];
  constructor(private demonsService: DemonsService, private route: Router) {}

  ngOnInit(): void {
    this.getDemons();
    this.getMagatamas();
  }

  navigateToDetail(id): void {
    this.route.navigateByUrl(`/Details/${id}`);
  }

  getDemons(): void {
    this.demonsService.getDemons().subscribe((resp) => {
      this.demonsArray = resp;
    });
  }

  getMagatamas(): void {
    this.demonsService.getMagatama().subscribe((resp) => {
      this.magatamaArray = resp;
    });
  }
}
