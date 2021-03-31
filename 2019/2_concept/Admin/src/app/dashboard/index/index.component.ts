import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  admin: any

  constructor() { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem('admin'))
  }

}
