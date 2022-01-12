import { ImageType } from "./image-type";
import { Name } from "./name";

export class Pais {
  cca2: string;
  fifa: string;
  flag: string;
  region: string;
  subregion: string;
  capital: string[];
  coatOfArms: ImageType;
  name: Name;

  constructor() {
    this.cca2 = '';
    this.fifa = '';
    this.flag = '';
    this.region = '';
    this.subregion = '';
    this.capital = [];

    this.coatOfArms = new ImageType();
    this.name = new Name();
  }
}
