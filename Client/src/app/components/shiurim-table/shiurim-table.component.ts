import { Component, Input } from '@angular/core';
import { Shiur } from 'src/app/models/Shiur.Model';

@Component({
  selector: 'app-shiurim-table',
  templateUrl: './shiurim-table.component.html',
  styleUrls: ['./shiurim-table.component.css']
})
export class ShiurimTableComponent {

@Input() filteredShiurim:Shiur[]=[];
@Input() viewMode: 'full' | 'compact' = 'full';
}
