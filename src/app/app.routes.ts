import { Routes } from '@angular/router';
import { ChatbotComponent } from 'src/modules/chatbot/chatbot.component';
import { CvComponent } from 'src/modules/cv/cv.component';

export const routes: Routes = [
    { path: '' , component: CvComponent},
    { path: 'chatbot', component: ChatbotComponent}
];