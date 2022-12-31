import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShareComponent } from './components/share/share.component';
import { DecorationsComponent } from './components/decorations/decorations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccessoriesComponent,
    FooterComponent,
    ShareComponent,
    DecorationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
