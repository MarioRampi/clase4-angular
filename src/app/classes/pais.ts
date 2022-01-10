import { Flag } from "./flag";
import { Name } from "./name";

export class Pais {
  cioc?: string;
  fifa?: string;
  flag?: string;
  region?: string;
  capital: string[] = [];
  name!: Name;
  flags: Flag = { png: '', svg: '' };
}

