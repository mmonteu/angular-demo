import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-compo-demo',
  templateUrl: './compo-demo.component.html',
  styleUrls: ['./compo-demo.component.css']
})
export class CompoDemoComponent implements OnInit {

  public name = "Marc";
  public age = "24";

  public redClass = "red-class";

  public showTitle = true;

  constructor() { }

  ngOnInit() {
  }

}
