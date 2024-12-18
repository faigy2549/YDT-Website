import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rav } from 'src/app/models/Rav.model';
import { Shiur } from 'src/app/models/Shiur.Model';
import { Topic } from 'src/app/models/Topic.model';
import { RavService } from 'src/app/services/rav.service';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-all-shiurim',
  templateUrl: './all-shiurim.component.html',
  styleUrls: ['./all-shiurim.component.css']
})
export class AllShiurimComponent implements OnInit {
  shiurim: Shiur[] = [];
  filteredShiurim: Shiur[] = [];
  selectedRav: string = ''; 
  selectedTopic: string = ''; 
  selectedYear: string = ''; 
  searchQuery: string = '';
  ravList: Rav[] = [];
  topicList: Topic[] = [];
  audioVisible: { [key: string]: boolean } = {};

  constructor(
    private shiurService: ShiurimService,
    private ravService: RavService,
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
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
      this.shiurim = shiurim;

      this.ravService.getRebbeim().subscribe((ravs) => {
        this.ravList = ravs;
      });
      this.topicService.getTopics().subscribe((topics) => {
        this.topicList = topics;
      });
      this.route.queryParams.subscribe(params => {
        console.log('Rav ID:', params['rav']);
        console.log('Topic ID:', params['topic']);
        this.selectedRav = params['rav'];
        this.selectedTopic = params['topic'];
        console.log("11111"+this.shiurim);
        
        this.applyFilters();
      });
    });
    
  }

  openAudio(shiurId: number) {
    this.audioVisible[shiurId] = !this.audioVisible[shiurId];
  }

  applyFilters() {
    console.log('All Shiurim:', this.shiurim); 
    console.log('Selected Rav:', this.selectedRav);
    console.log('Selected Topic:', this.selectedTopic);
    this.filteredShiurim = this.shiurim.filter(shiur => {
          const ravMatch = this.selectedRav ? Number(shiur.ravId) === Number(this.selectedRav) : true;
          const topicMatch = this.selectedTopic ? Number(shiur.topicId) === Number(this.selectedTopic) : true;
      const yearMatch = this.selectedYear ? new Date(shiur.date).getFullYear() === +this.selectedYear : true;
      const matchesSearch = !this.searchQuery || 
      shiur.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      (shiur.rav?.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      
      return ravMatch && topicMatch && yearMatch && matchesSearch;
    });
    history.pushState(null, '', '/all-shiurim');
  }
  
}
