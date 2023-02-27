import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() isSelected:boolean = false
  @Input() icon: string = "pi pi-home"
  @Input() caption:string = "სახლში მომსახურება"
  @Input() text: string = "ინტერკლინიკა დაარსდა 2003 წლის 3 სექტემბერს ქ..."
  @Output() select = new EventEmitter()
  @Output() readMore = new EventEmitter()

  onClick(){
    this.isSelected = true
    this.select.emit()
  }
  onReadMore(){
    this.readMore.emit()
  }
}
