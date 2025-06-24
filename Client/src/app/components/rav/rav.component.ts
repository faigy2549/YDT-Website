import { Component, OnInit } from '@angular/core';
import { Rav } from 'src/app/models/Rav.model';
import { RavService } from 'src/app/services/rav.service';

@Component({
  selector: 'app-rav',
  templateUrl: './rav.component.html',
  styleUrls: ['./rav.component.css']
})
export class RavComponent implements OnInit {
  rebbeim: Rav[] = [];
  loading = true;
  joiningtext:string = "";
  constructor(public ravService: RavService) {}

  ngOnInit() {
    this.ravService.reloadRebbeim$.subscribe(() => {
      this.loading = true;
      this.ravService.getRebbeim().subscribe(data => {
        this.rebbeim = data;
        this.loading = false;
        this.joiningtext = "Joining the R”Y in his sacred task is a supremely devoted and truly unique Hanhalas Hayeshiva.";
      });
    });
  }
}
