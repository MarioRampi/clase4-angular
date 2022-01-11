import { ImgType } from "./img-type";
import { Name } from "./name";

export class Pais {
  cca2: string;
  fifa: string;
  flag: string;
  region: string;
  subregion: string;
  capital: string[];
  name: Name;
  coatOfArms: ImgType;

  constructor() {
    this.cca2 = '';
    this.fifa = '';
    this.flag = '';
    this.region = '';
    this.subregion = ''
    this.capital = [];
    this.name = new Name();
    this.coatOfArms = new ImgType();
  }
}
