import { Shiur } from "./Shiur.Model";

export class Topic {
    id: number = 0;
    name: string = "";
    shiurim?: Shiur[]; // Optional, as the collection may not always be loaded
  }
  