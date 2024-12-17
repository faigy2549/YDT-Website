import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shiur } from 'src/app/models/Shiur.Model';
import { RavService } from 'src/app/services/rav.service';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-all-shiurim',
  templateUrl: './all-shiurim.component.html',
  styleUrls: ['./all-shiurim.component.css']
})
export class AllShiurimComponent implements OnInit{
constructor(private shiurService: ShiurimService,private ravService: RavService, private topicService: TopicService,private router: Router) { }
  shiurim:Shiur[]=[];
  
  ngOnInit(): void {
      this.shiurService.getShiurim().subscribe(shiurim => { 
        shiurim.map(shiur=>{
          this.topicService.getTopicById(shiur.topicId).subscribe(topic=>{
            shiur.topic=topic;
          });
          this.ravService.getById(shiur.ravId).subscribe(rav=>{
            shiur.rav=rav;
          })
        }
        )
      this.shiurim = shiurim;
      console.log("shiurim",this.shiurim);
      })
     }



  }


