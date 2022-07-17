import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratic-databinding',
  templateUrl: './pratic-databinding.component.html',
  styleUrls: ['./pratic-databinding.component.css']
})
export class PraticDatabindingComponent implements OnInit {

  userName: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  resetUserName() {
    this.userName = '';
  }

}
