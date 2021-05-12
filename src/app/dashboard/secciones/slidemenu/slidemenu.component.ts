import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.css']
})
export class SlidemenuComponent implements OnInit {

  @Input() width: number;
  mini = true;

  constructor() { }

  ngOnInit(): void {
  }

}
