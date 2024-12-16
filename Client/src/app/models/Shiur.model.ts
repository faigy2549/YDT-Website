import { Rav } from "./Rav.model";
import { Topic } from "./Topic.model";

export class Shiur {
    id: number = 0;
    title: string = "";
    year: number = 0;
    length: string = ""; 
    topicId: number = 0;
    topic?: Topic; 
    ravId: number = 0;
    rav?: Rav; 
  }
  