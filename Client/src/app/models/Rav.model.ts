import { Shiur } from "./Shiur.Model";

export class Rav {
    id: number = 0;
    name: string = "";
    title: string = "";
    bio: string = "";
    shiurim?: Shiur[]; // Optional, as the collection may not always be loaded
  }