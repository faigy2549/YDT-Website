import { Rav } from "./Rav.model";
import { Topic } from "./Topic.model";

export class Shiur {
    Id: number = 0;
    Title: string = "";
    Year: number = 0;
    Length: string = ""; 
    TopicId: number = 0;
    Topic?: Topic; 
    RavId: number = 0;
    Rav?: Rav; 
  }
  