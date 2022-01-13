import { ImgType } from "./img-type";
import { Name } from "./name";

export class Pais {
  cca2: string;
  fifa: string;
  flag: string;
  capital: string[];
  region: string;
  subregion: string;

  coatOfArms: ImgType;
  name: Name;

  constructor() {
    this.cca2 = '';
    this.fifa = ''
    this.flag = ''
    this.capital = [];
    this.region = '';
    this.subregion = '';

    this.coatOfArms = new ImgType();
    this.name = new Name();
  }
}
