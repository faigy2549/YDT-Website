import { Component } from '@angular/core';
import { Rav } from 'src/app/models/Rav.model';
import { RavService } from 'src/app/services/rav.service';

@Component({
  selector: 'app-rav',
  templateUrl: './rav.component.html',
  styleUrls: ['./rav.component.css']
})
export class RavComponent {
 rebbeim:Rav[]=[];      
constructor(public ravService: RavService) { }

ngOnInit() {
    this.ravService.reloadRebbeim$.subscribe(x => {
        this.ravService.getRebbeim().subscribe(data => this.rebbeim = data);
    });
}
}
