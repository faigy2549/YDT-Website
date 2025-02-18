import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rav } from 'src/app/models/Rav.model';
import { Shiur } from 'src/app/models/Shiur.Model';
import { Topic } from 'src/app/models/Topic.model';
import { RavService } from 'src/app/services/rav.service';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-all-shiurim',
  templateUrl: './all-shiurim.component.html',
  styleUrls: ['./all-shiurim.component.css'],
})
export class AllShiurimComponent implements OnInit {
  shiurim: Shiur[] = [];
  filteredShiurim: Shiur[] = [];
  selectedRav: string = ''; 
  selectedTopic: string = ''; 
  selectedYear: number | null = null;
  searchQuery: string = '';
  ravList: Rav[] = [];
  topicList: Topic[] = [];
  audioVisible: { [key: string]: boolean } = {};

  constructor(
    private shiurService: ShiurimService,
    private ravService: RavService,
    private topicService: TopicService,
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
        this.ravList = [{ id:-1, name: 'All',title:'',bio:'' }, ...ravs]; // Include "All"
      });
  
      this.topicService.getTopics().subscribe((topics) => {
        this.topicList = [{ id: -1, name: 'All' }, ...topics]; // Include "All"
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
    this.filteredShiurim = this.shiurim.filter(shiur => {
      const allRavSelected = !this.selectedRav || Number(this.selectedRav) ===-1;
      const allTopicSelected = !this.selectedTopic || Number(this.selectedTopic) === -1;
  
      const ravMatch = allRavSelected || Number(shiur.ravId) === Number(this.selectedRav);
      const topicMatch = allTopicSelected || Number(shiur.topicId) === Number(this.selectedTopic);
      const yearMatch = !this.selectedYear || new Date(shiur.date).getFullYear() === Number(this.selectedYear);
  
      const matchesSearch = !this.searchQuery || 
        (shiur.topic?.name?.toLowerCase().includes(this.searchQuery.toLowerCase())) || 
        (shiur.title?.toLowerCase().includes(this.searchQuery.toLowerCase())) || 
        (shiur.rav?.name?.toLowerCase().includes(this.searchQuery.toLowerCase()));
  
      return ravMatch && topicMatch && yearMatch && matchesSearch;
    });
    const queryParams = new URLSearchParams();
    if (this.selectedRav) queryParams.set('rav', this.selectedRav);
    if (this.selectedTopic) queryParams.set('topic', this.selectedTopic);
    if (this.selectedYear) queryParams.set('year', this.selectedYear.toString());
  
    const queryString = queryParams.toString();
    history.replaceState(null, '', `/all-shiurim${queryString ? '?' + queryString : ''}`);
  }
  
  
}
