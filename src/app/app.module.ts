import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvModule } from 'src/modules/cv/cv.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { CvComponent } from 'src/modules/cv/cv.component';
import { Header } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotModule } from 'src/modules/chatbot/chatbot.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CvModule,
    ChatbotModule,
    MenubarModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
