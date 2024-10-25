import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterContentInit{
  header : string = ''
  index =  0

  ngAfterContentInit(): void {
    let txt = '> Skills'; /* The text */
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
