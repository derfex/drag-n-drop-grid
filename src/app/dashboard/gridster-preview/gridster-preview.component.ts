import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterItemComponentInterface } from 'angular-gridster2/lib/gridsterItem.interface';

@Component({
  selector: 'app-gridster-preview',
  styleUrls: ['./gridster-preview.component.css'],
  templateUrl: './gridster-preview.component.html',
})
export class GridsterPreviewComponent implements OnInit {
  dashboard: Array<GridsterItem> = [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 0, x: 2},
  ];
  options: GridsterConfig = {};

  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit(): void {
    this.options = {
      draggable: {
        enabled: true,
      },
      itemChangeCallback: GridsterPreviewComponent.itemChange,
      itemResizeCallback: GridsterPreviewComponent.itemResize,
    };
  }

  changedOptions(): void {
    // this.options.api.optionsChanged();
  }

  removeItem(item: GridsterItem): void {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({cols: 2, rows: 1, y: 0, x: 0});
  }
}
