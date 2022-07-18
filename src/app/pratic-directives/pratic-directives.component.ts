import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratic-directives',
  templateUrl: './pratic-directives.component.html',
  styleUrls: ['./pratic-directives.component.css']
})
export class PraticDirectivesComponent implements OnInit {

  showSecret = false;
  secretePass: string = '';
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
