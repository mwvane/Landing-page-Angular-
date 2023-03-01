import { Component, OnInit } from '@angular/core';
import { Data } from 'src/data/data';
import { Laborant } from '../model/laborantModel';
import { News } from '../model/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  laborants: Laborant[] = [];
  news: News[] = [];
  
  ngOnInit(): void {
    this.laborants = Data.laborants;
    this.news = Data.news;
  }
}
