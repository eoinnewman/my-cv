import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent implements AfterContentInit{
  header : string = ''
  index =  0

  ngAfterContentInit(): void {
    let txt = '> Profile'; /* The text */
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
