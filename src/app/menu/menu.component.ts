import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Data } from 'src/data/data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  data = Data.menuItems

  onSelect(menuItem: any){
   for(let item of this.data){
    if(item.id === menuItem.id){
      item.isSelected = true
    }
    else{
      item.isSelected = false
    }
   }
  }
}
