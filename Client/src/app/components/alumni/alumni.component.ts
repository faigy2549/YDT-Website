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
  // validationErrors: string[] = [];
  errorMessage: string | null = null;
  imageList:{name:string, img:string}[]=[];
  
  constructor(
    private mazalTovService: MazalTovService,
    private occasionService: OccasionService, 
    private cdr: ChangeDetectorRef,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.getMazalTovList();
    this.getOccasions();
    this.imageList=[ {name:"yarchei",img:"../../../assets/yc.png"},{name:"yarchei",img:"../../../assets/yc.png"},{name:"yarchei",img:"../../../assets/yc.png"},{name:"yarchei",img:"../../../assets/yc.png"},{name:"yarchei",img:"../../../assets/yc.png"}];
  }
  addMazalTov(): void {
  this.mazalTovService.add(this.newMazalTov).subscribe({
    next: () => {
      this.formSubmitted = true; 
      this.getMazalTovList();
      this.newMazalTov = { id: 0, occasionId: 0, name: '', emailAddress: '', date: '' };
      this.resetForm()
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
  resetForm(): void {
    console.log("in reset");
    
    setTimeout(() => {
      this.formSubmitted = false;
      console.log("timer over")
    }, 10000); 
  }
  navigateToNewslatter(): void {
    this.router.navigate(['/newsletter']);
  }

}
