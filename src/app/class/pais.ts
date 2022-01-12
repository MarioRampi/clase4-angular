import { ImgType } from "./img-type";
import { Name } from "./name";

export class Pais {
  cca2: string;
  fifa: string;
  flag: string;
  capital: string[];
  region: string;
  subregion: string;
  name: Name;
  coatOfArms: ImgType;

  constructor() {
    this.cca2 = '';
    this.fifa = '';
    this.flag = '';
    this.capital = [];
    this.region = '';
    this.subregion = '';

    this.name = new Name();
    this.coatOfArms = new ImgType();
  }
}
