import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterContentInit{
  header : string = ''
  index =  0

  ngAfterContentInit(): void {
    let txt = '> Experience'; /* The text */
    let speed = 100;
    setTimeout(() => {
      this.typeWriter(txt,speed);
    }, speed);
  }

  typeWriter(txt: any,speed:any){
    if (this.index < txt.length) {
      this.header += txt.charAt(this.index);
      this.index++;
      setTimeout(() => {
        this.typeWriter(txt,speed);
      }, speed);
    }
  }
}
