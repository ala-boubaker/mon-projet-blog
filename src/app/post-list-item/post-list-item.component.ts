import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIt: number;
  @Input() created_date: Date ;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if ( this.loveIt > 0 ) {
      return 'green';
    }
    else if (this.loveIt < 0) {
      return 'red';
    }
    else {
      return 'black';
    }
  }

  onLoveIt() {
    console.log(this.loveIt);
    this.loveIt++;
    console.log(this.loveIt);
  }

  onDontLoveIt() {
    console.log(this.loveIt);
    this.loveIt--;
    console.log(this.loveIt);
  }
}
