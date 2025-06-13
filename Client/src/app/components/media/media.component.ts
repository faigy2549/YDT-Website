import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  events: Event[] = []; 
  viewImage:boolean=false;
  imageUrl:string="";

  // Updated list with both image and text items

  constructor(
    private eventService: EventService, 
  ) {}
isVideo(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

  ngOnInit(): void {
    this.getEvents();
 }
// export interface Event {
//     id: number;
//     eventName: string;
//     eventDate: Date;
//     eventLocation: string;
//     eventDetails: string;
//     eventAd: string;
//   }
  getEvents(): void {
    // this.eventService.getEvents().subscribe((data) => {
      //this.events = data;
      this.events=[{id:1,eventName:"Yarchei Kallah Day 1",eventAd:"https://d2r2w1ytriaiek.cloudfront.net/Photos/d1yc.mov",eventDate:new Date(),eventLocation:"Jerusalem",eventDetails:""},
        {id:1,eventName:"Yarchei Kallah 2025 Day 1",eventAd:"https://d2r2w1ytriaiek.cloudfront.net/Photos/d2yc.mov",eventDate:new Date(),eventLocation:"Jerusalem",eventDetails:""},
        {id:1,eventName:"Yarchei Kallah 2025 Day 2",eventAd:"https://d2r2w1ytriaiek.cloudfront.net/Photos/d3yc.mov",eventDate:new Date(),eventLocation:"Jerusalem",eventDetails:""},
        {id:1,eventName:"Yarchei Kallah 2025 Day 3",eventAd:"https://d2r2w1ytriaiek.cloudfront.net/Photos/bm-back.JPG",eventDate:new Date(),eventLocation:"Jerusalem",eventDetails:""}
      ]
    // });
  }
openImage(url:string):void{
this.viewImage=true;
this.imageUrl=url;

}


}
