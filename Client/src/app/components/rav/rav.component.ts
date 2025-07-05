import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rav } from 'src/app/models/Rav.model';
import { RavService } from 'src/app/services/rav.service';

@Component({
  selector: 'app-rav',
  templateUrl: './rav.component.html',
  styleUrls: ['./rav.component.css']
})
export class RavComponent implements OnInit {
 rebbeim$!: Observable<Rav[]>;
  joiningtext = "Joining the R”Y in his sacred task is a supremely devoted and truly unique Hanhalas Hayeshiva.";

  constructor(public ravService: RavService) {}

  ngOnInit() {
    this.rebbeim$ = this.ravService.getRebbeim();
  }
}
