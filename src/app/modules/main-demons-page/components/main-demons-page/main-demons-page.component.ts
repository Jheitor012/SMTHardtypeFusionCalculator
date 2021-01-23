import { DemonsService } from './../../../../services/demons.service';
import { Component, OnInit } from '@angular/core';
import { DemonsModel } from 'src/assets/model/all-models';

@Component({
  selector: 'app-main-demons-page',
  templateUrl: './main-demons-page.component.html',
  styleUrls: ['./main-demons-page.component.css'],
})
export class MainDemonsPageComponent implements OnInit {
  demonsArray: DemonsModel[];

  columnsToDisplay = ['race', 'name'];
  constructor(private demonsService: DemonsService) {}

  ngOnInit(): void {
    this.demonsService.getDemons().subscribe((resp) => {
      this.demonsArray = resp;
      console.log(resp);
    });
  }
}
