import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GridsterPreviewComponent } from './gridster-preview/gridster-preview.component';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild(GridsterPreviewComponent)
  gridsterPreview: GridsterPreviewComponent | undefined;
  @ViewChild('gridsterPreviewContainer')
  gridsterPreviewContainer: ElementRef<HTMLDivElement> | undefined;

  ngAfterViewInit(): void {
    this.dragInit();

    if (this.gridsterPreviewContainer) {
      this.dropInit(this.gridsterPreviewContainer.nativeElement);
    }
  }

  private addWidget(): void {
    this.gridsterPreview?.addItem();
  }

  private dragInit(): void {
    const widget: HTMLElement | null = document.getElementById('widget');

    if (!widget) {
      console.error('Widget not found');
      return;
    }

    widget.onmousedown = (mouseEvent: MouseEvent): void => {
      const clientRect: DOMRect = widget.getBoundingClientRect();
      const shiftX = mouseEvent.clientX - clientRect.left;
      const shiftY = mouseEvent.clientY - clientRect.top;

      // Передвинуть `widget` под координаты курсора и сдвинуть на половину ширины и высоты для центрирования.
      function moveAt(widget: HTMLElement, pageX: number, pageY: number): void {
        widget.style.left = pageX - shiftX + 'px';
        widget.style.top = pageY - shiftY + 'px';
      }

      DashboardComponent.prepareToMove(widget);
      moveAt(widget, mouseEvent.pageX, mouseEvent.pageY);

      document.onmousemove = function (mouseEvent: MouseEvent): void {
        moveAt(widget, mouseEvent.pageX, mouseEvent.pageY);
      };

      widget.onmouseup = function () {
        document.onmousemove = null;
        widget.onmouseup = null;
      };
    };

    widget.ondragstart = function () {
      return false;
    };
  }

  private dropInit(element: HTMLDivElement): void {
    element.onmouseup = (mouseEvent: MouseEvent): void => {
      // this.addWidget();
      // TODO.
    };
    element.ondrop = (mouseEvent: MouseEvent): void => {
      // TODO.
    };
  }

  private static prepareToMove(widget: HTMLElement): void {
    widget.style.width = widget.offsetWidth + 'px';
    widget.style.position = 'absolute';
    widget.style.zIndex = '1000';
    document.body.appendChild(widget);
  }
}
