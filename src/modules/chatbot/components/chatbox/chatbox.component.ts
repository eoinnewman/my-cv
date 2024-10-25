import { Component } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  subscription: Subscription;

  constructor(private terminalService: TerminalService) {
      this.subscription = this.terminalService.commandHandler.subscribe((command) => {
        command = command.toLocaleLowerCase();
        if(command==='skills'){
          let response = 'Java, JS, Angular, Spring Boot ...'
          this.terminalService.sendResponse(response);
        }
        else if(command==='profile'){
          let response = '29 years old , irish'
          this.terminalService.sendResponse(response);
        }else{
          let response = 'Hmmmmm , im not too sure';
          this.terminalService.sendResponse(response);
        }
      });
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}
