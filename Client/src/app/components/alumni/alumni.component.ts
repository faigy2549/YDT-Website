import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MazalTov } from 'src/app/models/MazalTov.model';
import { Occasion } from 'src/app/models/Occasion.model';
import { MazalTovService } from 'src/app/services/mazaltov.service';
import { OccasionService } from 'src/app/services/occasion.service'; // Import the service

@Component({
  selector: 'app-mazal-tov',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css'],
})
export class AlumniComponent implements OnInit {
  mazalTovList: MazalTov[] = [];
  newMazalTov: MazalTov = { id: 0, occasionId: 0, name: '', emailAddress: '', date: '' };
  occasions: Occasion[] = []; // Add property to store occasions
  formSubmitted = false;
  validationErrors: string[] = [];
  errorMessage: string | null = null;
  
  constructor(
    private mazalTovService: MazalTovService,
    private occasionService: OccasionService, 
    private cdr: ChangeDetectorRef,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.getMazalTovList();
    this.getOccasions();
  }

  addMazalTov(): void {
  this.formSubmitted = true;
  this.validationErrors = [];

  if (!this.newMazalTov.name || !this.newMazalTov.emailAddress || !this.newMazalTov.occasionId || !this.newMazalTov.date) {
    this.validationErrors.push('All fields are required.');
    return; 
  }

  this.mazalTovService.add(this.newMazalTov).subscribe({
    next: () => {
      this.formSubmitted = true; 
      this.validationErrors = []; 
      this.getMazalTovList();
      this.newMazalTov = { id: 0, occasionId: 0, name: '', emailAddress: '', date: '' };
    },
    error: (error) => {
      this.errorMessage = 'An error occurred while submitting the form.';
      console.error(error);
    },
  });
}

  getMazalTovList(): void {
    this.mazalTovService.getAll().subscribe((data) => {
      this.mazalTovList = data;
      this.cdr.detectChanges();
    });
  }

  getOccasions(): void {
    this.occasionService.getAll().subscribe((data) => {
      this.occasions = data;
    });
  }
  navigateToNewslatter(): void {
    this.router.navigate(['/newsletter']);
  }

}
