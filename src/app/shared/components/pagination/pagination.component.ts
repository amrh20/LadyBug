import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() current: any = 1;
  @Input() last: any = 15;

  pagesArr: any = [];
  hasNext: any = false;
  hasPrev: any = false;
  constructor() { }

  ngOnInit(): void {
    this.pagination(this.current, this.last);
  }

  pagination(c: any = this.current, m: any) {
    let current,
      last,
      delta,
      left,
      right,
      range,
      rangeWithDots,
      l;
    current = c;
    last = m;
    delta = 2;
    left = current - delta;
    right = current + delta + 1;
    range = [];
    rangeWithDots = [];

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || i >= left && i < right) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    this.pagesArr = rangeWithDots;
  }


  paginationSend(id: any, index: any = 0) {
    if (id !== '...') {
      if (this.current === 1) {
        this.hasPrev = false;
        this.hasNext = true;
      }
      if (this.current <= id) {

        this.hasPrev = true;
        this.hasNext = false;
      }
      if (id !== this.current) {
        this.current = id;
      }
    } else {
      if (index === 1) {
        this.current = this.current - 5;
      } else {
        this.current = this.current + 5;
      }
    }

    this.pagination(this.current, this.last);
  }


  previous() {
    this.paginationSend(this.current - 1);
  }
  next() {
    this.paginationSend(this.current + 1);
  }


}
