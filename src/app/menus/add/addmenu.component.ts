import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Menu } from '../../interfaces/Menu'

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {
  public model: any;
  public menuData: Menu;


  constructor() {
    this.menuData = {
      items: [
        {
          dayNumber: 1,
          breakfast: [],
          lunch: [],
          dinner: [],
        }
      ]
    };
  }

  ngOnInit() {
  }

  addDayColumn() {
    this.menuData.items.push({
      dayNumber: this.menuData.items.length + 1,
      breakfast: [],
      lunch: [],
      dinner: [],
    });
  }

  deleteColumn(dayNumber) {
    this.menuData.items = this.menuData.items.filter(menuItem => menuItem.dayNumber !== dayNumber);
  }
}
