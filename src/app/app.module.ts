import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridsterPreviewComponent } from './dashboard/gridster-preview/gridster-preview.component';
import { WidgetPanelComponent } from './dashboard/widget-panel/widget-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GridsterPreviewComponent,
    WidgetPanelComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
