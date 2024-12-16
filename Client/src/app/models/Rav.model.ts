import { Shiur } from "./Shiur.Model";

export class Rav {
    Id: number = 0;
    Name: string = "";
    Title: string = "";
    Bio: string = "";
    Shiurim?: Shiur[]; // Optional, as the collection may not always be loaded
  }