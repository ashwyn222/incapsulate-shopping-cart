import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  inputs: ['pagination']
})
export class PaginationComponent implements OnInit {
  pagination:any;
  constructor() { }

  ngOnInit() {
  }

}
