import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { JobListService } from './services/job-list.service';
import { HeaderComponent } from './components/header/header.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    HeaderComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
