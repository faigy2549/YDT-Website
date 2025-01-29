import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event.model';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  events: Event[] = []; 
  viewImage:boolean=false;
  imageUrl:string="";

  // Updated list with both image and text items

  constructor(
    private eventService: EventService, 
  ) {}

  ngOnInit(): void {
    this.getEvents();
 }

  getEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
openImage(url:string):void{
this.viewImage=true;
this.imageUrl='https://localhost:7117/'+url;
}


}
