import { Component } from '@angular/core';
import { Shiur } from 'src/app/models/Shiur.Model';
import { ShiurimService } from 'src/app/services/shiurim.service';

@Component({
  selector: 'app-shiurim',
  templateUrl: './shiurim.component.html',
  styleUrls: ['./shiurim.component.css']
})
export class ShiurimComponent {
  shiurim:Shiur[]=[];
  constructor(public shiurService: ShiurimService) { }

  ngOnInit() {
      this.shiurService.reloadShiurim$.subscribe(x => {
          this.shiurService.getShiurim().subscribe(data => this.shiurim = data);
      });
  }

}
