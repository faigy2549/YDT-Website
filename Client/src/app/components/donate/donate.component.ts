import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  donationAmount = 7000; 
  recentDonations:[]=[];

  tickMarks = Array.from({ length: 9 }, (_, i=1) => ({
    label: `$${i * 5}K`,
    value: i * 5000,
    angle: 125 + (i * 36) }));

  get donationPercentage(): string {
  return `${Math.round((this.donationAmount / 40000) * 100)}%`;
}
}
//0502758444