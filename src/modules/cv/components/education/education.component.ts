import { AfterContentInit, Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements AfterContentInit{
  header : string = ''
  index =  0

  ngAfterContentInit(): void {
    let txt = '> Education'; /* The text */
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
