import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  name: string;
  logo: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.name = localStorage.getItem('name');
    this.logo = localStorage.getItem('logo');

  }
  goToPickupcalls() {
    this.router.navigate(['pickup-calls']);
  }
  newPickupCall() {
    this.router.navigate(['pickup-call']);
  }
}
