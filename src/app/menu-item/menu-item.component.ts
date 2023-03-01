import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() menuItem: any;
  @Output() select = new EventEmitter();
  @Output() readMore = new EventEmitter();

  onClick() {
    this.select.emit(this.menuItem);
  }
  onReadMore() {
    this.readMore.emit();
  }
  iconStyleObject() {
    if (this.menuItem.isSelected) {
      return { color: '#25508C', 'background-color': 'white' };
    }
    return { color: '#F9981B', 'background-color': '#F5F5F5' };
  }
}
