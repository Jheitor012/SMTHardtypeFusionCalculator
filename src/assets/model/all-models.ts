export class DemonsModel {
  id: number;
  race: string;
  lvl: number;
  name: string;
  hp: number;
  mp: number;
  st: number;
  ma: number;
  vi: number;
  ag: number;
  lu: number;
  isBoss?: boolean;
  isBroker?: boolean;
  evolvesTo?: DemonsModel;
  evolvedFrom?: DemonsModel;
  // skills: SkillModel[];
  physRes: string;
  fireRes: string;
  iceRes: string;
  elecRes: string;
  forceRes: string;
  curseRes: string;
  mindRes: string;
  nerveRes: string;
  expelRes: string;
  deathRes: string;
}

export class MagatamaModel {
  id: number;
  name: string;
  location: string;
  // skills?: SkillModel[];
  resistances: ResistancesModel;
  baseSt: number;
  baseMa: number;
  baseVi: number;
  baseAg: number;
  baseLu: number;
  phys: string;
  fire: string;
  ice: string;
  elec: string;
  force: string;
  curse: string;
  mind: string;
  nerve: string;
  expel: string;
  death: string;
}

export class ResistancesModel {
  phys: string;
  fire: string;
  ice: string;
  elec: string;
  force: string;
  curse: string;
  mind: string;
  nerve: string;
  expel: string;
  death: string;
}

export class SkillModel {
  id: number;
  type: string;
  name: string;
  desc: string;
  cost: string;
  target: string;
  learnedBy: DemonsModel[];
}
