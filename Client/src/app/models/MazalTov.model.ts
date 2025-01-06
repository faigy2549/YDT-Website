import { Alumni } from "./Alumni.model";
import { Occasion } from "./Occasion.model";

export class MazalTov{
    id: number=0; // Unique identifier

    occasionId: number=0; // Foreign key for Occasion
    occasion?: Occasion=new Occasion; // Occasion object (optional)
  
    name:string="";
    email:string="";
  
    date: string=""; // Date as ISO string (e.g., "2024-12-24")
}