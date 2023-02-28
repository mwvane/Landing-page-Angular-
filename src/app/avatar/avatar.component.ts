import { Component, Input } from '@angular/core';
import { Laborant } from '../model/laborantModel';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() data: Laborant = {}
}
