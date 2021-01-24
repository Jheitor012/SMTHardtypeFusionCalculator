import {
  MagatamaModel,
  ResistancesModel,
} from './../../../../../assets/model/all-models';
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
  columnsDisplayMagatamas = [
    'name',
    'baseSt',
    'baseMa',
    'baseVi',
    'baseAg',
    'baseLu',
    'phys',
    'fire',
    'ice',
    'elec',
    'force',
    'curse',
    'nerve',
    'mind',
    'expel',
    'death',
  ];
  constructor(private demonsService: DemonsService, private route: Router) {}

  ngOnInit(): void {
    this.getDemons();
    this.getMagatamas();
  }

  navigateToDetailDemons(id): void {
    this.route.navigateByUrl(`/Details/Demons/${id}`);
  }

  navigateToDetailMagatama(id): void {
    this.route.navigateByUrl(`/Details/Magatama/${id}`);
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
