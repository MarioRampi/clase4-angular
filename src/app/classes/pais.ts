import { ImgType } from "./img-type";
import { Name } from "./name";

export class Pais {
  cioc!: string;
  fifa!: string;
  flag!: string;
  region!: string;
  capital: string[] = [];
  coatOfArms: ImgType = new ImgType();
  name: Name = new Name();
}
