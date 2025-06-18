import { Component, OnInit } from '@angular/core';
import { Rav } from 'src/app/models/Rav.model';
import { Shiur } from 'src/app/models/Shiur.Model';
import { TopicDTO } from 'src/app/models/TopicDTO.model';
import { RavService } from 'src/app/services/rav.service';
import { ShiurimService } from 'src/app/services/shiurim.service';
import { TopicService } from 'src/app/services/topic.service';
import { S3Service } from '../services/s3.service';

@Component({
  selector: 'app-shiurim',
  templateUrl: './shiurim.component.html',
})
export class ShiurimComponent implements OnInit {
  shiurim: Shiur[] = [];
  ravOptions: Rav[] = [];
  topicOptions: TopicDTO[] = [];
  
  currentShiur: Shiur = new Shiur();
  newTopicName: string = "";
  showAddDialog = false;
  isEditMode = false;

  uploadedFile: File | null = null;  // Track the uploaded file

  constructor(
    private shiurService: ShiurimService,
    private ravService: RavService,
    private topicService: TopicService,
    private s3Service: S3Service
  ) {}

  ngOnInit() {
    this.loadShiurim();
    this.loadRavs();
    this.loadTopics();
  }

  loadShiurim() {
    this.shiurService.getShiurim().subscribe(data => this.shiurim = data);
  }

  loadRavs() {
    this.ravService.getRebbeim().subscribe(data => this.ravOptions = data);
  }

  loadTopics() {
    this.topicService.getTopics().subscribe(data => this.topicOptions = data);
  }
  openAddDialog() {
  this.currentShiur = new Shiur();   
  this.uploadedFile = null;          
  this.isEditMode = false;         
  this.showAddDialog = true;
}

openEditDialog(shiur: Shiur) {
  this.currentShiur = { ...shiur };  
  this.uploadedFile = null;          
  this.isEditMode = true;
  this.showAddDialog = true;
}


  addNewTopic() {
    if (this.newTopicName && this.newTopicName.length <= 10) {
      const newTopic: TopicDTO = { name: this.newTopicName };
      this.topicService.addTopic(newTopic).subscribe(topic => {
        if (topic.id) {
          this.topicOptions.push(topic);
          this.currentShiur.topicId = topic.id;
        }
        this.newTopicName = "";
      });
    }
  }

  saveShiur() {
    if (this.uploadedFile) {
      // First upload file
      this.s3Service.upload(this.uploadedFile).subscribe(url => {
        this.currentShiur.audioUrl = url;
        this.completeSaveShiur();
      }, error => {
        console.error('File upload failed:', error);
        // Optional: Show user error message
      });
    } else {
      this.completeSaveShiur();
    }
  }

  private completeSaveShiur() {
    if (this.isEditMode) {
      this.shiurService.updateShiur(this.currentShiur).subscribe(() => this.loadShiurim());
    } else {
      this.shiurService.addShiur(this.currentShiur).subscribe(() => this.loadShiurim());
    }
    this.showAddDialog = false;
    this.uploadedFile = null;  // Reset after save
  }

  deleteShiur(id: number) {
    this.shiurService.deleteShiur(id).subscribe(() => this.loadShiurim());
  }

onFileSelect(event: any) {
  this.uploadedFile = event.files[0];
}


}
