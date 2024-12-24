import { Component, OnInit } from '@angular/core';
import { MazalTov } from 'src/app/models/MazalTov.model';
import { MazalTovService } from 'src/app/services/mazaltov.service';

@Component({
  selector: 'app-mazal-tov',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  mazalTovList: MazalTov[] = [];
  newMazalTov: MazalTov = {id:0, occasionId: 0, alumniId: 0, date: '' };

  constructor(private mazalTovService: MazalTovService) {}

  ngOnInit(): void {
    this.getMazalTovList();
  }

  getMazalTovList(): void {
    this.mazalTovService.getAll().subscribe((data) => {
      this.mazalTovList = data;
    });
  }

  addMazalTov(): void {
    if (this.newMazalTov.occasionId && this.newMazalTov.alumniId && this.newMazalTov.date) {
      this.mazalTovService.add(this.newMazalTov).subscribe(() => {
        this.getMazalTovList();
        this.newMazalTov = { id:0,occasionId: 0, alumniId: 0, date: '' };
      });
    }
  }
}
