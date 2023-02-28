import { Component } from '@angular/core';
import { Data } from 'src/data/data';
import { Laborant } from '../model/laborantModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  laborants:Laborant[] = Data.laborants
}
