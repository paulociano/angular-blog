import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css','./news-card.responsive.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input()
  cardTitle:string=''

  @Input()
  cardDescription:string=''

  @Input()
  cardCategory:string=''

  @Input()
  cardPhoto:string=''

  constructor() {}

  ngOnInit(): void{
  }
}
