import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedNav = '';
  
  ngOnInit() {
    this.selectedNav = 'home';
  }
  navigateClick(param: string) {
    this.selectedNav = param
  }
}


