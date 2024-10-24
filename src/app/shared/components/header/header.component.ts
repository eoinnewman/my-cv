import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(){}

  ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-home',
            routerLink: '/'
        },
        {
            label: 'Futher Questions',
            icon: 'pi pi-comments',
            routerLink: 'chatbot'
        },
        {
          label: 'Contact Details',
          icon: 'pi pi-phone'
        },
        {
          label: 'Download CV',
          icon: 'pi pi-cloud-download'
        }
    ]
  }
}
