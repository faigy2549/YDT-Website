import { Shiur } from "./Shiur.Model";

export class Topic {
    Id: number = 0;
    Name: string = "";
    Shiurim?: Shiur[]; // Optional, as the collection may not always be loaded
  }
  