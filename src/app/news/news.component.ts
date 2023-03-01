import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/data/data';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() data: News = {};
}
