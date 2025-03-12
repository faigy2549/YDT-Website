import { Component, OnInit } from '@angular/core';
import { Shiur } from 'src/app/models/Shiur.Model';
import { RavService } from 'src/app/services/rav.service';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-latest-shiurim',
  templateUrl: './latest-shiurim.component.html',
  styleUrls: ['./latest-shiurim.component.css']
})
export class LatestShiurimComponent implements OnInit {
  latestShiurim: Shiur[] = [];
    constructor(
      private ravService: RavService,
      private topicService: TopicService,
      private shiurService: ShiurimService
    ) {}


  ngOnInit(): void {
    this.shiurService.getShiurim().subscribe((shiurim) => {
      shiurim.map((shiur) => {
        this.topicService.getTopicById(shiur.topicId).subscribe((topic) => {
          shiur.topic = topic;
        });
        this.ravService.getById(shiur.ravId).subscribe((rav) => {
          shiur.rav = rav;
        });
      });
      this.latestShiurim = [...shiurim].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
    });
  }
}
