import { Component, OnInit } from '@angular/core';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { RavService } from 'src/app/services/rav.service';
import { Shiur } from 'src/app/models/Shiur.Model';
import { Topic } from 'src/app/models/Topic.model';
import { Rav } from 'src/app/models/Rav.model';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators'; 
import { TopicService } from 'src/app/services/topic.service';



@Component({
  selector: 'app-shiurim',
  templateUrl: './shiurim.component.html',
  styleUrls: ['./shiurim.component.css']
})
export class ShiurimComponent implements OnInit {
  rabbanim: Rav[] = [];  
  rabbanimWithTopics: { rav: Rav, topics: Topic[] }[] = [];  
  layout: string = 'grid';
  constructor(private shiurService: ShiurimService, private ravService: RavService, private topicService: TopicService) { }

  ngOnInit(): void {
    this.getAllRabbanimWithTopics();  
  }

  getAllRabbanimWithTopics(): void {
    this.ravService.getRebbeim().subscribe(rabbanim => {
      this.rabbanim = rabbanim; 
      console.log(this.rabbanim);   
      this.getTopicsForRabbanim(rabbanim);
    });
  }

  getTopicsForRabbanim(rabbanim: Rav[]): void {
    const ravRequests = rabbanim.map(rav => {
      return this.shiurService.getShiurimByRavId(rav.id).pipe(
        switchMap((shiurim: Shiur[]) => {
          if (shiurim.length === 0) {
            // If there are no Shiurim for this Rabbi, return an empty topics array
            return of({ rav, topics: [] });
          }
  
          const topicIds = shiurim.map(shiur => shiur.topicId);  
          const topicRequests = topicIds.map(topicId => this.topicService.getTopicById(topicId)); 
          return forkJoin(topicRequests).pipe( 
            map((topics: Topic[]) => {
              const distinctTopics = this.getDistinctTopics(topics);
              return { rav, topics: distinctTopics };
            }),
            catchError(() => {
              // If there's an error (e.g., no topics), return an empty topics array
              return of({ rav, topics: [] });
            })
          );
        }),
        catchError(() => {
          // If the Shiur request fails (e.g., no Shiurim), return an empty topics array
          return of({ rav, topics: [] });
        })
      );
    });
  
    forkJoin(ravRequests).subscribe(
      (results) => {
        this.rabbanimWithTopics = results.filter(result => result.topics.length > 0);
      },
      (error) => {
        console.error('Error fetching topics for Rabbanim:', error);
      }
    );
  }
  
  getDistinctTopics(topics: Topic[]): Topic[] {
    const distinctTopics: Topic[] = [];
    
    topics.forEach(topic => {
      if (!distinctTopics.some(existingTopic => existingTopic.id === topic.id)) {
        distinctTopics.push(topic);
      }
    });
    
    return distinctTopics;
  }
}