import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { InfoComponent } from './components/info/info.component';
import { PanelModule} from 'primeng/panel'
import { ChatbotComponent } from './chatbot.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    ChatboxComponent,
    InfoComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    InputTextareaModule,
    ButtonModule,
    CardModule,
    InputGroupAddonModule,
    InputGroupModule,
    AvatarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatbotModule { }
