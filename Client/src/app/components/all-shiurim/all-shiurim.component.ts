import { Component, Input, OnInit } from '@angular/core';
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
  @Input() latestOnly: boolean = false;
  @Input() maxShiurim: number = 4; 
  shiurim: Shiur[] = [];
  filteredShiurim: Shiur[] = [];
  selectedRavIds: number[] = [];
  selectedTopicIds: number[] = [];
  enabledRavIds: number[] = [];
  enabledTopicIds: number[] = [];
  selectedYear: number | null = null;
  searchQuery: string = '';
  ravList: Rav[] = [];
  topicList: Topic[] = [];
  audioVisible: { [key: string]: boolean } = {};
  filterSidebarVisible: boolean = false;

  constructor(
    private shiurService: ShiurimService,
    private ravService: RavService,
    private topicService: TopicService,
    private route: ActivatedRoute,
  ) {}

ngOnInit(): void {
  // Get query params early
  const queryRav = this.route.snapshot.queryParamMap.get('rav');
  const queryTopic = this.route.snapshot.queryParamMap.get('topic');
  const queryYear = this.route.snapshot.queryParamMap.get('year');

  Promise.all([
    this.shiurService.getShiurim().toPromise(),
    this.ravService.getRebbeim().toPromise(),
    this.topicService.getTopics().toPromise()
  ]).then(async ([shiurimRaw, ravsRaw, topicsRaw]) => {
    const shiurim = shiurimRaw ?? [];
    const ravs = ravsRaw ?? [];
    const topics = topicsRaw ?? [];

    // Load full shiurim data
    await Promise.all(
      shiurim.map(async s => {
        s.rav = await this.ravService.getById(s.ravId).toPromise();
        s.topic = await this.topicService.getTopicById(s.topicId).toPromise();
      })
    );

    this.shiurim = shiurim;

    this.ravList = ravs;
    this.topicList = topics;

    this.selectedRavIds = queryRav ? queryRav.split(',').map(Number) : [];
    this.selectedTopicIds = queryTopic ? queryTopic.split(',').map(Number) : [];

    if (queryYear && /^\d{4}$/.test(queryYear)) {
      this.selectedYear = Number(queryYear);
    }

    this.applyFilters(); 
  });
}


  openAudio(shiurId: number) {
    this.audioVisible[shiurId] = !this.audioVisible[shiurId];
  }

applyFilters() {
  const hasRavFilter = this.selectedRavIds.length > 0;
  const hasTopicFilter = this.selectedTopicIds.length > 0;

  // Step 1: Filter the shiurim based on selection
  this.filteredShiurim = this.shiurim.filter(shiur => {
    const ravMatch = !hasRavFilter || this.selectedRavIds.includes(shiur.ravId);
    const topicMatch = !hasTopicFilter || this.selectedTopicIds.includes(shiur.topicId);
    const yearMatch = !this.selectedYear || new Date(shiur.date).getFullYear() === this.selectedYear;
    const matchesSearch = !this.searchQuery ||
      shiur.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      shiur.rav?.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      shiur.topic?.name.toLowerCase().includes(this.searchQuery.toLowerCase());

    return ravMatch && topicMatch && yearMatch && matchesSearch;
  });

  // Step 2: Enable all Ravs who have any shiurim
  const allRavIdsWithShiurim = new Set(this.shiurim.map(s => s.ravId));
  this.enabledRavIds = this.ravList.map(r => r.id).filter(id => allRavIdsWithShiurim.has(id));

  // Step 3: Enable all Topics that have at least one Rav with shiurim
  const allTopicIdsWithShiurim = new Set(this.shiurim.map(s => s.topicId));
  this.enabledTopicIds = this.topicList.map(t => t.id).filter(id => allTopicIdsWithShiurim.has(id));
}


// Helpers to get names
getRavName(id: number): string {
  return this.ravList.find(r => r.id === id)?.name || '';
}

getTopicName(id: number): string {
  return this.topicList.find(t => t.id === id)?.name || '';
}

// “Chip” actions
removeRav(id: number) {
  this.selectedRavIds = this.selectedRavIds.filter(r => r !== id);
  this.applyFilters();
}
removeTopic(id: number) {
  this.selectedTopicIds = this.selectedTopicIds.filter(t => t !== id);
  this.applyFilters();
}
removeYear() {
  this.selectedYear = null;
  this.applyFilters();
}
clearAll() {
  this.selectedRavIds = [];
  this.selectedTopicIds = [];
  this.selectedYear = null;
  this.searchQuery = '';
  this.applyFilters();
}

// Show the chips bar only when any filter is active
hasAnyFilter(): boolean {
  return this.selectedRavIds.length > 0 ||
         this.selectedTopicIds.length > 0 ||
         !!this.selectedYear ||
         !!this.searchQuery;
}

  
}
