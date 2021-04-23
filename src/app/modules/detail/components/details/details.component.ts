import {
  MagatamaModel,
  DemonsModel,
  SkillModel,
} from './../../../../../assets/model/all-models';
import { DemonsService } from './../../../../services/demons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  isDemon = false;
  isMagatama = false;

  tiles = [];

  demonId: number;
  magatamaId: number;

  magatamaModel: MagatamaModel;
  demonModel: DemonsModel;
  skillsModel: SkillModel[];

  name = '';
  desc = '';
  race = '';
  constructor(private route: ActivatedRoute, private service: DemonsService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.url.subscribe((resp) => {
      resp.map((x) => {
        if (x.path === 'Demons') {
          this.isDemon = true;
          this.isMagatama = false;
          this.getDemonById();
        }
        if (x.path === 'Magatama') {
          this.isMagatama = true;
          this.isDemon = false;
          this.getMagatamaById();
        }
      });
    });
  }

  getDemonById(): void {
    this.demonId = this.route.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.service.getDemons().subscribe((resp) => {
      this.demonModel = resp.find((x) => x.id === this.demonId);
      this.name = this.demonModel.name;
      this.race = this.demonModel.race;
    });
  }

  getMagatamaById(): void {
    this.magatamaId = this.route.snapshot.params.id;
    const magatamaId = Number(this.magatamaId);
    // tslint:disable-next-line: deprecation
    this.service.getMagatama().subscribe((resp) => {
      this.magatamaModel = resp.find((x) => x.id === magatamaId);
      this.name = this.magatamaModel.name;
      // this.skillsModel = this.magatamaModel.skills;
    });
  }

  getSkillDesc(id): void {
    const a = this.skillsModel.find((x) => x.id === id);
    this.desc = a.desc;
  }
}
